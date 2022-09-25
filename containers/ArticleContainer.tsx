import { useRouter } from "next/router";
import ArticleWrapper from "../components/Article/Wrapper/ArticleWrapper";
import DynamicComponentLoader from "../components/Article/InteractiveComponents/DynamicComponentLoader";
import CustomHead from "../components/CustomHead";
import LoadingRing from "../components/Loading/Ring/LoadingRing";
import PageContainerBox from "../components/Page/PageContainerBox/PageContainerBox";
import { Article } from "../models/Article";
import { Article as NewArticle } from "../models/article/Article";
import ErrorArticleContainer from "./Error/ErrorArticleContainer";
import { genArticleStructuredData } from "../utils/structuredData";
import { BulletPoint } from "../models/BulletPoint";

interface Props {
  article: NewArticle;
  bulletPoints: BulletPoint[];
  articleHTMLContent: string;
  referencesHtmlContent: string | null;
  recommendations: Article[];
}

const ArticleContainer: React.FC<Props> = ({
  article,
  recommendations,
  articleHTMLContent,
  bulletPoints,
  referencesHtmlContent,
}) => {
  const metaDesc = article?.description
    ? article?.description
    : "Descripcion de ejemplo";
  const metaImage = article.banner.url;
  const router = useRouter();

  if (router.isFallback) return <LoadingRing />;
  if (!article) return <ErrorArticleContainer />;

  return (
    <>
      <CustomHead
        title={article.seoMetadata.titleAlt.unwrapOr("")}
        metaTitle={article.seoMetadata.metaTitle.unwrapOr("")}
        metaDesc={metaDesc}
        imgUrl={metaImage}
        structuredData={genArticleStructuredData(article)}
      />
      <PageContainerBox breakLimit="xl">
        <ArticleWrapper
          articleHTMLContent={articleHTMLContent}
          bulletPoints={bulletPoints}
          referencesHtmlContent={referencesHtmlContent}
          article={article}
          recommendations={recommendations}
        />
      </PageContainerBox>
      <DynamicComponentLoader />
    </>
  );
};

export default ArticleContainer;
