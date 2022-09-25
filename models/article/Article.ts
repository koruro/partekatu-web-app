import { BulletPoint } from "../BulletPoint";
import { Category } from "../Category";
import { Id } from "../Id";
import { Locale } from "../locale/LocaleData";
import { ArticleMetadata, SeoMetadata } from "../metadata/Metadata";
import { Infographic } from "../Infographic";
import { Option } from "rorjs";
import { ExternalMultimediaAsset } from "../external-multimedia-asset/ExternalMultimediaAsset";
import { ReferedArticle } from "../Article";
import { Entity } from "../ddd/Entity";

export interface ArticleProps {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  category: Category;
  banner: ExternalMultimediaAsset;
  bulletPoints: Option<BulletPoint[]>;
  video: Option<ExternalMultimediaAsset>;
  references: Option<string>;
  preamble: Option<string>;
  metadata: Option<ArticleMetadata>;
  seoMetadata: SeoMetadata;
  infographic: Option<Infographic>;
  content: string;
  referedArticles: ReferedArticle[];
  createdAt: string;
  publishedAt: string;
  locale: Locale;
}

export class Article extends Entity<ArticleProps> {
  private constructor(props: ArticleProps, id: Id) {
    super(props, id);
  }

  get slug() {
    return this.props.slug;
  }

  get description() {
    return this.props.description;
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

  get createdAt() {
    return this.props.createdAt;
  }

  get publishedAt() {
    return this.props.publishedAt;
  }

  public static create(props: ArticleProps, id: Id) {
    const article = new this(
      {
        title: props.title,
        description: props.description,
        createdAt: props.createdAt,
        publishedAt: props.publishedAt,
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
        // availableLocales: props.availableLocales,
        infographic: props.infographic,
        metadata: props.metadata,
        seoMetadata: props.seoMetadata,
      },
      id
    );

    return article;
  }
}

export interface ArticleReference {
  title: string;
  url: string;
}
