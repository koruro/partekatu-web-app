import { BulletPoint } from "./BulletPoint";
import { Category } from "./Category";
import { ArticleMetadata, SeoMetadata } from "./metadata/Metadata";

export interface Article {
  id: string | number;
  slug: string;
  title: string;
  emoji: string;
  banner: string;
  description: string;
  preamble: string;
  content: string;
  infographic: any;
  bulletPoints: BulletPoint[];
  videoUrl: string;
  references: string;
  locale: string;
  metadata: ArticleMetadata;
  seoMetadata: SeoMetadata;
  category: Category;
  referedArticles: ReferedArticle[];
  createdAt: string;
  publishedAt: string;
}

export interface ReferedArticle {
  id: string | number;
  slug: string;
  title: string;
}
