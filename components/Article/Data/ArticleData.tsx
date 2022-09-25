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
import { Article as NewArticle } from "../../../models/article/Article";
import ArticleReferedArticles from "../Refered/ArticleReferedArticles";
import {
  getArticleWordCount,
  getReadingTime,
} from "../../../utils/articleMetrics";
import PreInfographicAd from "../../Ads/PreInfographicAd";
import { BulletPoint } from "../../../models/BulletPoint";

interface Props {
  article: NewArticle;
  recommendations: Article[];
  bulletPoints: BulletPoint[];
  articleHTMLContent: string;
  referencesHtmlContent: string | null;
  showCitation?: boolean;
  showSocials?: boolean;
}

const ArticleData: React.FC<Props> = ({
  article,
  recommendations,
  articleHTMLContent,
  referencesHtmlContent,
  bulletPoints,
  showCitation = true,
  showSocials = true,
}) => {
  return (
    <article className={styles["article-data"]} id="article">
      <ArticleHeader
        banner={article.banner.url}
        preamble={article.preamble.unwrapOr("")}
        emoji={article.emoji}
        title={article.title}
        altTitle={article.seoMetadata.titleAlt.unwrapOr(undefined)}
        metaTitle={article.seoMetadata.metaTitle.unwrapOr(undefined)}
        category={article.category}
        readingTime={getReadingTime(getArticleWordCount(articleHTMLContent))}
        slug={article.slug}
      />
      <ArticleContent slug={article.slug} content={articleHTMLContent} />
      <ArticleReferedArticles articles={article.referedArticles} />
      {article.infographic && <PreInfographicAd />}
      {article.infographic.isSome() && (
        <ArticleInfographic infographic={article.infographic.getValue()} />
      )}
      {article.video.isSome() && (
        <ArticleVideo
          videoUrl={article.video.map((v) => v.url).getValue()}
          title={article.title}
        />
      )}
      {referencesHtmlContent && (
        <ArticleReferences references={referencesHtmlContent} />
      )}
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
