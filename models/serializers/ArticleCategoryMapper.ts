import { Article } from "../Article/Article";
import { ArticleCategory } from "../Article/ArticleCategory";
import { Id } from "../Id";
import { Locale } from "../LocaleData";
import { LocaleMapper } from "./LocaleMapper";

export class ArticleCategoryMapper {
	public static serialize(articleCategory: ArticleCategory) {
		return {
			id: articleCategory.getId()?.getValue(),
			uidSlug: articleCategory.props.uidSlug,
			title: articleCategory.props.title,
			slug: articleCategory.props.slug,
			description: articleCategory.props.description,
			locale: LocaleMapper.serialize(articleCategory.props.locale),
		};
	}

	public static deserialize(articleCategory: any): ArticleCategory {
		return ArticleCategory.create(
			{
				uidSlug: articleCategory.uidSlug,
				title: articleCategory.title,
				slug: articleCategory.slug,
				description: articleCategory.description,
				locale: LocaleMapper.deserialize(articleCategory.locale),
			},
			new Id(articleCategory.id)
		);
	}
}
