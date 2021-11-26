import { Article } from "../models/Article";
import { Category } from "../models/Category";
import { CategoriesEnum } from "../types/categories";

export interface Query {
	category?: CategoriesEnum;
	excludeSlugs?: string[];
	skip?: number;
	limit?: number;
	order?: { property: string; order: "ASC" | "DESC" };
	titleStartsWith?: string;
}

export interface PreviewOptions {
	preview?: boolean;
}

export const DEFAULT_PREVIEW_OPTIONS: PreviewOptions = {
	preview: false,
};

export interface ContentRepository {
	getNumArticles(query?: Query): Promise<number>;
	getArticles(query?: Query): Promise<Article[]>;
	getHighlightArticles(query?: Query): Promise<Article[]>;
	getArticleSlugs(query?: Query): Promise<{ slug: string }[]>;
	getArticleBySlug(slug: string, options?: PreviewOptions): Promise<Article>;
	getCategories(query?: Query): Promise<Category[]>;
	getCategoryBySlug(slug: string): Promise<Category>;
}
