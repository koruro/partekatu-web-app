import { BulletPoint } from "./BulletPoint";
import { Category } from "./Category";
import { ArticleMetadata } from "./Metadata";

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
	category: Category;
}
