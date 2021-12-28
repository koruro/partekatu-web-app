import ArticleHeader from "../Header/ArticleHeader";
import ArticleReferences from "../References/ArticleReferences";
import ArticleCitation from "../Citation/ArticleCitation";
import ArticleSocials from "../Socials/ArticleSocials";
import ArticleInfographic from "../Infographic/ArticleInfographic";
import ArticleRecommendations from "../ArticleRecommendations";
import ArticleVideo from "../Video/ArticleVideo";
import ArticleContent from "../Content/ArticleContent";
import styles from "./styles.module.css";
import Divider from "../../Shared/Divider/Divider";
import { Article } from "../../../models/Article";
import ArticleReferedArticles from "../Refered/ArticleReferedArticles";

const WPM = 225;

interface Props {
	article: Article;
	recommendations: Article[];
	showCitation?: boolean;
	showSocials?: boolean;
}

const getReadingTime = (content: string, wpm: number = 225) => {
	// Calculates the estimated reading minutes
	const words = content.trim().split(/\s+/).length;
	const time = Math.ceil(words / wpm);

	return time;
};

const ArticleData: React.FC<Props> = ({
	article,
	recommendations,
	showCitation = true,
	showSocials = true,
}) => {
	return (
		<article className={styles["article-data"]} id="article">
			<ArticleHeader
				banner={article.banner}
				preamble={article.preamble}
				emoji={article.emoji}
				title={article.title}
				altTitle={article.seoMetadata.titleAlt}
				metaTitle={article.seoMetadata.metaTitle}
				category={article.category}
				readingTime={getReadingTime(article.content, WPM)}
				slug={article.slug}
			/>
			<ArticleContent content={article.content} />
			<ArticleReferedArticles articles={article.referedArticles} />
			<ArticleInfographic infographic={article.infographic} />
			<ArticleVideo videoUrl={article.videoUrl} title={article.title} />
			<ArticleReferences references={article.references} />
			<Divider />
			{showCitation && <ArticleCitation title={article.title} />}
			{showSocials && <ArticleSocials title={article.seoMetadata.metaTitle} />}
			<ArticleRecommendations
				recommendations={recommendations}
				showSectionTitle={true}
			/>
		</article>
	);
};

export default ArticleData;
