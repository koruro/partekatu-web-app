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

	async getHighlightArticles(query?: Query): Promise<Article[]> {
		const _query = await this.highlightQueryConformer(query);
		const data = await this.client.getEntries(_query);

		if (data.items.length <= 0)
			throw new Error(`No articles found under query ${JSON.stringify(query)}`);

		const parsed = await this.client.parseEntries<any>(data);

		const articles: Entry<any>[] = parsed.items.map(
			(item) => item.fields.article
		);

		return articles
			.filter((item) =>
				query?.category
					? item.fields.category.fields.slug === query?.category
					: true
			)
			.map((item) => this.mapContentfulToDomain<Article>(item));
	}

	async getNumArticles(query?: Query): Promise<number> {
		const _query = this.articleQueryConformer(query);
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
		const _query = this.articleQueryConformer(query);
		const data = await this.client.getEntries(_query);

		if (data.items.length <= 0)
			throw new Error(`No articles found under query ${JSON.stringify(query)}`);

		const parsed = await this.client.parseEntries<any>(data);

		return parsed.items.map((item) =>
			this.mapContentfulToDomain<Article>(item)
		);
	}

	async getCategoryBySlug(slug: string): Promise<Category> {
		const _query = { content_type: "category", "fields.slug[all]": slug };
		const data = await this.client.getEntries(_query);

		if (data.items.length <= 0)
			throw new Error(`No category found with slug ${slug}`);

		const parsed = await this.client.parseEntries<any>(data);

		return this.mapContentfulToDomain<Category>(parsed.items[0]);
	}

	async getCategories(query?: Query): Promise<Category[]> {
		const _query = { content_type: "category" };
		const data = await this.client.getEntries(_query);

		if (data.items.length <= 0)
			throw new Error(`No articles found under query ${JSON.stringify(query)}`);

		const parsed = await this.client.parseEntries<any>(data);

		return parsed.items.map((item) =>
			this.mapContentfulToDomain<Category>(item)
		);
	}

	private articleQueryConformer(query?: Query) {
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

	private async highlightQueryConformer(query?: Query) {
		let _query: any = {
			content_type: "highlights",
			order: "-sys.createdAt",
			include: 10,
		};

		if (query?.limit) {
			_query = { ..._query, limit: query.limit };
		}
		if (query?.skip) {
			_query = { ..._query, skip: query.skip };
		}
		// if (query?.excludeSlugs) {
		// 	_query = {
		// 		..._query,
		// 		"fields.slug[nin]": query.excludeSlugs.join(","),
		// 	};
		// }
		// if (query?.titleStartsWith) {
		// 	_query = {
		// 		..._query,
		// 		"fields.title[match]": query.titleStartsWith,
		// 	};
		// }

		return _query;
	}

	private categoryQueryConformer(query?: Query) {
		let _query: any = {
			content_type: "highlights",
			order: "-sys.createdAt",
			include: 10,
		};

		if (query?.limit) {
			_query = { ..._query, limit: query.limit };
		}
		if (query?.skip) {
			_query = { ..._query, skip: query.skip };
		}
		// if (query?.category) {
		// 	_query = {
		// 		..._query,
		// 		"fields.category.sys.contentType.sys.id": "category",
		// 		"fields.category.fields.slug[all]": query.category,
		// 	};
		// }
		// if (query?.excludeSlugs) {
		// 	_query = {
		// 		..._query,
		// 		"fields.slug[nin]": query.excludeSlugs.join(","),
		// 	};
		// }
		// if (query?.titleStartsWith) {
		// 	_query = {
		// 		..._query,
		// 		"fields.title[match]": query.titleStartsWith,
		// 	};
		// }

		return _query;
	}

	private mapContentfulToDomain<T>(entry: Entry<any>): T {
		// console.log("MAPAP", entry);
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
