import { optionFrom } from "rorjs";
import {
  deserializeExternalMultimediaAsset,
  serializeExternalMultimediaAsset,
} from "../../external-multimedia-asset/externalMultimediaAssetSerializer";
import { Id } from "../../Id";
import {
  deserializeLocale,
  serializeLocale,
} from "../../locale/localeSerializer";
import {
  deserializeSeoMetadata,
  serializeSeoMetadata,
} from "../../metadata/metadataSerializer";
import { Article } from "../Article";
import { deserializeCategory, serializeCategory } from "./categorySerializer";

export const serializeArticle = (article: Article) => {
  return {
    id: article.getId().getValue(),
    description: article.description,
    title: article.props.title,
    slug: article.slug,
    emoji: article.props.emoji,
    preamble: article.props.preamble.unwrapOr(null),
    content: article.props.content,
    category: serializeCategory(article.category),
    infographic: article.props.infographic.unwrapOr(null),
    locale: serializeLocale(article.props.locale),
    banner: serializeExternalMultimediaAsset(article.props.banner),
    video: article.video.map(serializeExternalMultimediaAsset).unwrapOr(null),
    references: article.props.references.unwrapOr(null),
    bulletPoints: article.props.bulletPoints.unwrapOr(null),
    referedArticles: article.props.referedArticles ?? null,
    seoMetadata: serializeSeoMetadata(article.props.seoMetadata),
    metadata: article.props.metadata.unwrapOr(null),
    createdAt: article.createdAt,
    publishedAt: article.publishedAt,
  };
};

export const deserializeArticle = (
  article: ReturnType<typeof serializeArticle>
) => {
  return Article.create(
    {
      title: article.title,
      slug: article.slug,
      emoji: article.emoji,
      preamble: optionFrom(article.preamble),
      content: article.content,
      category: deserializeCategory(article.category),
      infographic: optionFrom(article.infographic),
      locale: deserializeLocale(article.locale),
      banner: deserializeExternalMultimediaAsset(article.banner),
      video: optionFrom(article.video).map(deserializeExternalMultimediaAsset),
      references: optionFrom(article.references),
      bulletPoints: optionFrom(article.bulletPoints),
      referedArticles: article.referedArticles,
      seoMetadata: deserializeSeoMetadata(article.seoMetadata),
      description: article.description,
      metadata: optionFrom(article.metadata),
      createdAt: article.createdAt,
      publishedAt: article.publishedAt,
    },
    new Id(article.id)
  );
};
