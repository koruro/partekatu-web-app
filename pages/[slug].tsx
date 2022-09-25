import { GetStaticPaths, GetStaticProps } from "next";
import { Option, some } from "rorjs";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import ArticleContainer from "../containers/ArticleContainer";
import { Article } from "../models/Article";
import {
  deserializeArticle,
  serializeArticle,
} from "../models/article/mappers/articleSerializer";
import { BulletPoint } from "../models/BulletPoint";
import { articleRepository } from "../services/bootstrap";
import { ArticleMarkdownParser } from "../utils/markdownToHtml";

interface Props {
  article: any;
  bulletPoints: BulletPoint[];
  articleHTMLContent: string;
  referencesHtmlContent: string | null;
  recommendations: Article[];
}

const ArticlePage: React.FC<Props> = ({
  article,
  bulletPoints,
  articleHTMLContent,
  referencesHtmlContent,
  recommendations,
}) => {
  return (
    <PageBox>
      <NavBar />
      <ArticleContainer
        article={deserializeArticle(article)}
        articleHTMLContent={articleHTMLContent}
        bulletPoints={bulletPoints}
        referencesHtmlContent={referencesHtmlContent}
        recommendations={recommendations}
      />
      <Footer />
    </PageBox>
  );
};

// Get all slug paths
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await articleRepository.getArticleSlugs();

  const paths = slugs.map((param) => ({
    params: param,
  }));

  return { paths, fallback: false };
};

// Get static props
export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  if (!params?.slug) throw new Error(`No slug param found`);
  try {
    // Fetch article and recommendations data
    const article = await articleRepository.getArticleBySlug(
      params.slug as string,
      { preview }
    );

    const recommendations = await articleRepository.getArticles({
      limit: 3,
      excludeSlugs: [article.slug],
    });

    const htmlContent = new ArticleMarkdownParser(article.content);

    await htmlContent.parse();

    const bulletPoints = htmlContent.getBulletPoints(
      article.bulletPoints.unwrapOrUndefined()
    );

    const returnedProps = {
      article: serializeArticle(article),
      bulletPoints,
      articleHTMLContent: htmlContent.getRawHtml(),
      referencesHTMLContent: await getReferenceHTMLContent(
        article.references
      ).then((p) => p.unwrapOr(null)),
      recommendations,
    };

    return {
      props: returnedProps,
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};

async function getReferenceHTMLContent(
  references: Option<string>
): Promise<Option<string>> {
  if (references.isNone()) return references;

  const val = references.getValue();

  const referencesHtmlContent = new ArticleMarkdownParser(val);

  await referencesHtmlContent.parse({
    htmlElementTransformer: { anchor: { aditionalRel: ["nofollow"] } },
  });

  return some(referencesHtmlContent.getRawHtml());
}

export default ArticlePage;
