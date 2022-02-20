import { ReferedArticle } from "../ReferedArticle";

export class ArticleReferedArticlesMapper {
	public static serialize(referedArticle: ReferedArticle) {
		return {
			id: referedArticle.getId()?.getValue(),
			slug: referedArticle.props.slug,
			title: referedArticle.props.title,
		};
	}
}
