import { ExternalMultimediaAsset } from "../../external-multimedia-asset/ExternalMultimediaAsset";
import { Entry } from "contentful";
import { none, optionFrom, some } from "rorjs";
import { Locale } from "../../locale/LocaleData";
import { Article } from "../Article";
import { Category } from "../../Category";
import { Id } from "../../Id";
import { Infographic } from "../../Infographic";
import { ReferedArticle } from "../../Article";

export const mapContentfulArticleToDomain = (entry: Entry<any>): Article => {
  const fields = entry.fields;

  return Article.create(
    {
      description: fields.description,
      metadata: optionFrom(fields.metadata),
      banner: ExternalMultimediaAsset.create({
        url: fields.banner,
        altTitle: none(),
        caption: none(),
      }),
      emoji: fields.emoji,
      content: fields.content,
      locale: Locale.create({ locale: entry.sys.locale }),
      category:
        fields.category && mapContentfulCategoryToDomain(fields.category),
      slug: fields.slug,
      title: fields.title,
      preamble: optionFrom(fields.preamble),
      video: optionFrom(fields.videoUrl).map((val) =>
        ExternalMultimediaAsset.create({
          url: val,
          altTitle: none(),
          caption: none(),
        })
      ),
      createdAt: entry.sys.createdAt,
      publishedAt: entry.sys.updatedAt,
      infographic: optionFrom(fields.infographic).map((val) =>
        mapContentfulInfograficToDomain(val)
      ),
      seoMetadata: {
        metaDesc: optionFrom(fields.metadata?.meta_desc),
        metaTitle: optionFrom(fields.metadata?.meta_title),
        titleAlt: optionFrom(fields.metadata?.title_alt),
      },
      bulletPoints: optionFrom(fields.bulletPoints),
      referedArticles: fields.referedArticles
        ? fields.referedArticles.map((article: any) =>
            mapContentfulReferedArticleToDomain(article)
          )
        : [],
      references: optionFrom(fields.references),
    },
    new Id(entry.sys.id)
  );
};

const mapContentfulCategoryToDomain = (entry: Entry<any>): Category => {
  return {
    name: entry.fields.name,
    color: entry.fields.color ?? null,
    description: entry.fields.description ?? null,
    seoMetadata: {
      metaDesc: entry.fields.metadata?.meta_desc ?? null,
      metaTitle: entry.fields.metadata?.meta_title ?? null,
      titleAlt: entry.fields.metadata?.title_alt ?? null,
    },
    locale: entry.sys.locale,
    slug: entry.fields.slug ?? null,
    title: entry.fields.title ?? null,
    created_at: entry.sys.createdAt as any,
    updated_at: entry.sys.updatedAt as any,
    id: entry.sys.id,
  };
};

const mapContentfulInfograficToDomain = (entry: Entry<any>): Infographic => {
  return {
    file: entry.fields.file,
    description: entry.fields.description ?? null,
    title: entry.fields.title,
  };
};

export function mapContentfulReferedArticleToDomain(
  entry: Entry<any>
): ReferedArticle {
  const fields = entry.fields;
  return {
    id: entry.sys.id,
    slug: fields.slug,
    title: fields.title,
  };
}
