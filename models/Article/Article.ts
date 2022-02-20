import { isUndefinedOrNull } from "../../utils/isUndefined";
import { BulletPoint } from "./BulletPoint";
import { Category } from "../Category";
import { Entity } from "../Entity";
import { ArticleMissingAttributeError } from "../errors/ArticleMissingAttributeError";
import { ExternalMultimediaAsset } from "../ExternalMultimediaAsset";
import { Id } from "../Id";
import { Locale } from "../LocaleData";
import { ArticleMetadata, SeoMetadata } from "../Metadata";
import { ReferedArticle } from "../ReferedArticle";
import { Infographic } from "./Infographic";
import { ArticleCategory } from "./ArticleCategory";

export interface ArticleProps {
	slug: string;
	title: string;
	category: ArticleCategory;
	banner: ExternalMultimediaAsset;
	emoji: string;
	bulletPoints?: BulletPoint[];
	video?: ExternalMultimediaAsset;
	references?: ArticleReference[];
	preamble?: string;
	locale: Locale;
	metadata?: ArticleMetadata;
	seoMetadata: SeoMetadata;
	infographic?: Infographic;
	content: string;
	referedArticles?: ReferedArticle[];
	availableLocales: { locale: string; slug: string }[];
}

export class Article extends Entity<ArticleProps> {
	private constructor(props: ArticleProps, id?: Id) {
		super(props, id);
	}

	get description(): string {
		return this.seoMetadata.description;
	}

	get slug() {
		return this.props.slug;
	}

	get title() {
		return this.props.title;
	}

	get emoji() {
		return this.props.emoji;
	}

	get category() {
		return this.props.category;
	}

	get banner() {
		return this.props.banner;
	}

	get seoMetadata() {
		return this.props.seoMetadata;
	}

	get content() {
		return this.props.content;
	}

	get bulletPoints() {
		return this.props.bulletPoints;
	}

	get preamble() {
		return this.props.preamble;
	}

	get video() {
		return this.props.video;
	}

	get references() {
		return this.props.references;
	}

	get infographic() {
		return this.props.infographic;
	}

	get referedArticles() {
		return this.props.referedArticles;
	}

	public static create(props: ArticleProps, id: Id) {
		this.checkForMissingAttribute(props, "slug");
		this.checkForMissingAttribute(props, "title");
		this.checkForMissingAttribute(props, "content");
		this.checkForMissingAttribute(props, "locale");
		this.checkForMissingAttribute(props, "seoMetadata");

		const article = new this(
			{
				title: props.title,
				slug: props.slug,
				preamble: props.preamble,
				banner: props.banner,
				emoji: props.emoji,
				category: props.category,
				bulletPoints: props.bulletPoints,
				video: props.video,
				referedArticles: props.referedArticles,
				references: props.references,
				content: props.content,
				locale: props.locale,
				availableLocales: props.availableLocales,
				infographic: props.infographic,
				metadata: props.metadata,
				seoMetadata: props.seoMetadata,
			},
			id
		);

		return article;
	}

	private static checkForMissingAttribute(
		props: ArticleProps,
		attribute: keyof ArticleProps
	) {
		if (isUndefinedOrNull(props[attribute]))
			throw new ArticleMissingAttributeError(attribute);
		return false;
	}
}

export interface ArticleReference {
	title: string;
	url: string;
}
