import { createClient, ContentfulClientApi, Entry } from "contentful";
import { Article } from "../models/Article";
import { Category } from "../models/Category";
import { ContentRepository, Query } from "./ContentRepository";

export class ContentfulRepository implements ContentRepository {
	private readonly client: ContentfulClientApi;
	constructor() {
		this.client = createClient({
			space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
			accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
		});
	}

	async getNumArticles(query?: Query): Promise<number> {
		const _query = this.queryConformer(query);
		const data = await this.client.getEntries({
			..._query,
			select: "fields.slug",
		});

		return data.items.length;
	}

	async getArticleSlugs(query?: Query): Promise<{ slug: string }[]> {
		const data = await this.client.getEntries({
			content_type: "article",
			select: "fields.slug",
		});
		const parsed = await this.client.parseEntries<any>(data);

		return parsed.items.map((item) =>
			this.mapContentfulToDomain<Article>(item)
		);
	}

	async getArticleBySlug(slug: string): Promise<Article> {
		const data = await this.client.getEntries({
			content_type: "article",
			"fields.slug[all]": slug,
		});
		if (data.items.length <= 0)
			throw new Error(`No article found with slug ${slug}`);

		const parsed = await this.client.parseEntries<any>(data);

		return this.mapContentfulToDomain<Article>(parsed.items[0]);
	}

	async getArticles(query?: Query): Promise<Article[]> {
		const _query = this.queryConformer(query);
		const data = await this.client.getEntries(_query);

		if (data.items.length <= 0)
			throw new Error(`No articles found under query ${JSON.stringify(query)}`);

		const parsed = await this.client.parseEntries<any>(data);

		return parsed.items.map((item) =>
			this.mapContentfulToDomain<Article>(item)
		);
	}

	getCategoryBySlug(slug: string): Promise<Category> {
		throw new Error("Method not implemented.");
	}

	getCategories(query?: Query): Promise<Category[]> {
		throw new Error("Method not implemented.");
	}

	private queryConformer(query?: Query) {
		let _query: any = { content_type: "article", order: "-sys.createdAt" };

		if (query?.limit) {
			_query = { ..._query, limit: query.limit };
		}
		if (query?.skip) {
			_query = { ..._query, skip: query.skip };
		}
		if (query?.category) {
			_query = {
				..._query,
				"fields.category.sys.contentType.sys.id": "category",
				"fields.category.fields.slug[all]": query.category,
			};
		}
		if (query?.excludeSlugs) {
			_query = {
				..._query,
				"fields.slug[nin]": query.excludeSlugs.join(","),
			};
		}
		if (query?.titleStartsWith) {
			_query = {
				..._query,
				"fields.title[match]": query.titleStartsWith,
			};
		}

		return _query;
	}

	private mapContentfulToDomain<T>(entry: Entry<any>): T {
		const parsed = Object.keys(entry.fields).reduce((acc: any, key) => {
			if (typeof entry.fields[key] === "object" && entry.fields[key] !== null) {
				if (Reflect.has(entry.fields[key], "fields")) {
					acc[key] = this.mapContentfulToDomain(entry.fields[key]);
					return acc;
				}
			}

			acc[key] = entry.fields[key];
			return acc;
		}, {});
		return parsed;
	}
}
