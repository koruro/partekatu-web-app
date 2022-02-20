import { Article } from "../Article/Article";
import { ExternalMultimediaAsset } from "../ExternalMultimediaAsset";
import { Id } from "../Id";
import { Locale } from "../LocaleData";
import { SeoMetadata } from "../Metadata";
import { ArticleCategoryMapper } from "./ArticleCategoryMapper";
import { ArticleReferedArticlesMapper } from "./ArticleReferedArticlesMapper";
import { ExternalMultimediaAssetMapper } from "./ExternalMultimediaAssetMapper";
import { InfographicMapper } from "./InfographicMapper";
import { LocaleMapper } from "./LocaleMapper";
import { SeoMetadataMapper } from "./SeoMetadataMapper";

export class ArticleMapper {
	public static serialize(article: Article) {
		return {
			id: article.getId()?.getValue(),
			title: article.props.title,
			slug: article.slug,
			emoji: article.props.emoji,
			preamble: article.props.preamble,
			content: article.props.content,
			category: ArticleCategoryMapper.serialize(article.category),
			infographic: article.infographic
				? InfographicMapper.serialize(article.infographic)
				: null,
			locale: LocaleMapper.serialize(article.props.locale),
			banner: ExternalMultimediaAssetMapper.serialize(article.props.banner),
			video: article.video
				? ExternalMultimediaAssetMapper.serialize(article.video)
				: null,
			references: article.props.references,
			availableLocales: article.props.availableLocales,
			bulletPoints: article.props.bulletPoints,
			referedArticles: article.props.referedArticles
				? article.props.referedArticles.map((refered) =>
						ArticleReferedArticlesMapper.serialize(refered)
				  )
				: null,
			seoMetadata: SeoMetadataMapper.serialize(article.props.seoMetadata),
		};
	}

	public static deserialize(article: any): Article {
		return Article.create(
			{
				title: article.title,
				slug: article.slug,
				preamble: article.preamble,
				content: article.content,
				video:
					article.video &&
					ExternalMultimediaAsset.create({
						url: article.video.url,
						altTitle: article.video.altTitle,
						caption: article.video.caption,
					}),
				banner: ExternalMultimediaAsset.create({
					url: article.banner.url,
					altTitle: article.banner.altTitle,
					caption: article.banner.caption,
				}),
				emoji: article.emoji,
				availableLocales: article.availableLocales,
				locale: Locale.create({ locale: article.locale }),
				category: ArticleCategoryMapper.deserialize(article.category),
				seoMetadata: SeoMetadata.create({
					title: article.seoMetadata.title,
					description: article.seoMetadata.description,
				}),
				bulletPoints: article.bulletPoints,
				infographic: InfographicMapper.deserialize(article.infographic),
				metadata: article.metadata,
			},
			new Id(article.id)
		);
	}
}
