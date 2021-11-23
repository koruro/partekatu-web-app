import { Article } from "../../../models/Article";
import ArticleSection from "../Section/ArticleSection";
import styles from "./styles.module.css";

interface Props {
	articles: Article[];
}

const ArticleReferedArticles: React.FC<Props> = ({ articles }) => {
	if (!articles) return null;
	return (
		<ArticleSection className={styles["article-refered-articles"]}>
			<p>
				Sigue con{" "}
				{articles.map((article) => (
					<a key={article.id} href={`/${article.slug}`}>
						{article.title}
					</a>
				))}
			</p>
		</ArticleSection>
	);
};

export default ArticleReferedArticles;
