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
import {
  getArticleWordCount,
  getReadingTime,
} from "../../../utils/articleMetrics";
import PreInfographicAd from "../../Ads/PreInfographicAd";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import CardCourseForm from "../../CourseForm/CardCourseForm/CardCourseForm";

//Hola
interface Props {
  article: Article;
  recommendations: Article[];
  showCitation?: boolean;
  showSocials?: boolean;
}

const ArticleData: React.FC<Props> = ({
  article,
  recommendations,
  showCitation = true,
  showSocials = true,
}) => {
  const isPageWide = useMediaQuery(`(min-width: 790px)`);

  const showAdOrSubscriptionForm = () => {
    if (!article.infographic) return;

    if (isPageWide) return <PreInfographicAd />;

    return (
      <div
        style={{
          margin: "1rem",
        }}
      >
        <CardCourseForm />
      </div>
    );
  };
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
        readingTime={getReadingTime(getArticleWordCount(article.content))}
        slug={article.slug}
      />
      <ArticleContent slug={article.slug} content={article.content} />
      <ArticleReferedArticles articles={article.referedArticles} />
      {showAdOrSubscriptionForm()}
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
