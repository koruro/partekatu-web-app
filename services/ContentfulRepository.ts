import { createClient, ContentfulClientApi, Entry } from "contentful";
import { Article } from "../models/Article";
import { Category } from "../models/Category";
import { Infographic } from "../models/Infographic";
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

		const articles: Entry<any>[] = parsed.items.map((item) => item);

		return articles.map((item) => this.mapArticleToDomain(item));
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

		return this.mapArticleToDomain(data.items[0]);
	}

	async getArticles(query?: Query): Promise<Article[]> {
		const _query = this.articleQueryConformer(query);
		const data = await this.client.getEntries(_query);

		if (data.items.length <= 0)
			throw new Error(`No articles found under query ${JSON.stringify(query)}`);

		return data.items.map((item) => this.mapArticleToDomain(item));
	}

	async getCategoryBySlug(slug: string): Promise<Category> {
		const _query = { content_type: "category", "fields.slug[all]": slug };
		const data = await this.client.getEntries(_query);

		if (data.items.length <= 0)
			throw new Error(`No category found with slug ${slug}`);

		const parsed = await this.client.parseEntries<any>(data);

		return this.mapCategoryToDomain(parsed.items[0]);
	}

	async getCategories(query?: Query): Promise<Category[]> {
		const _query = { content_type: "category" };
		const data = await this.client.getEntries(_query);

		if (data.items.length <= 0)
			throw new Error(`No articles found under query ${JSON.stringify(query)}`);

		const parsed = await this.client.parseEntries<any>(data);

		return parsed.items.map((item) => this.mapCategoryToDomain(item));
	}

	private articleQueryConformer(query?: Query) {
		let _query: any = {
			content_type: "article",
			order: "-sys.createdAt",
			include: 1,
		};

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

		if (query?.order) {
			_query = {
				..._query,
				order: `${query.order.order === "DESC" ? "-" : ""}sys.${
					query.order.property
				}`,
			};
		}

		return _query;
	}

	private async highlightQueryConformer(query?: Query) {
		let _query: any = {
			content_type: "article",
			order: "-sys.createdAt",
			"metadata.tags.sys.id[in]": "highlightHome",
			include: 1,
		};
		if (query?.limit) {
			_query = { ..._query, limit: query.limit };
		}
		if (query?.skip) {
			_query = { ..._query, skip: query.skip };
		}
		if (query?.category) {
			_query = {
				..._query,
				"metadata.tags.sys.id[in]": "highlight",
				"fields.category.sys.contentType.sys.id": "category",
				"fields.category.fields.slug[all]": query.category,
			};
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
		const parsed = Object.keys(entry.fields).reduce((acc: any, key) => {
			if (typeof entry.fields[key] === "object" && entry.fields[key] !== null) {
				if (Reflect.has(entry.fields[key], "fields")) {
					acc[key] = this.mapContentfulToDomain(entry.fields[key]);
					return acc;
				}

				if (Array.isArray(entry.fields[key])) {
					acc[key] = entry.fields[key].map((el: any) => {
						if (Reflect.has(el, "fields")) {
							return this.mapContentfulToDomain(el);
						}
						return el;
					});
					return acc;
				}
			}

			acc[key] = entry.fields[key];
			return acc;
		}, {});
		return parsed;
	}

	private mapArticleToDomain(entry: Entry<any>, stack = 1): Article {
		const fields = entry.fields;
		return {
			id: entry.sys.id,
			banner: fields.banner,
			bulletPoints: fields.bulletPoints ?? null,
			content: fields.content ?? null,
			description: fields.description ?? null,
			emoji: fields.emoji ?? null,
			metadata: fields.metadata ?? null,
			seoMetadata: fields.seoMetadata ?? null,
			preamble: fields.preamble ?? null,
			slug: fields.slug,
			title: fields.title,
			references: fields.references ?? null,
			videoUrl: fields.videoUrl ?? null,
			locale: entry.sys.locale ?? null,
			category: fields.category && this.mapCategoryToDomain(fields.category),
			infographic: fields.infographic
				? this.mapInfograficToDomain(fields.infographic)
				: null,
			referedArticles:
				stack > 0
					? fields.referedArticles
						? fields.referedArticles.map((article: any) =>
								this.mapArticleToDomain(article, --stack)
						  )
						: null
					: null,
		};
	}

	private mapCategoryToDomain(entry: Entry<any>): Category {
		return {
			name: entry.fields.name,
			color: entry.fields.color ?? null,
			description: entry.fields.description ?? null,
			seoMetadata: entry.fields.seoMetadata ?? null,
			slug: entry.fields.slug ?? null,
			title: entry.fields.title ?? null,
			created_at: entry.sys.createdAt as any,
			updated_at: entry.sys.updatedAt as any,
			id: entry.sys.id,
		};
	}

	private mapInfograficToDomain(entry: Entry<any>): Infographic {
		return {
			file: entry.fields.file,
			description: entry.fields.description ?? null,
			title: entry.fields.title,
		};
	}
}
