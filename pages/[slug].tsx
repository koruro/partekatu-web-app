import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import ArticleContainer from "../containers/ArticleContainer";
import { Article } from "../models/Article";
import { articleRepository } from "../services/bootstrap";
import { CategoriesEnum } from "../types/categories";
import { ArticleMarkdownParser } from "../utils/markdownToHtml";

interface Props {
  article: Article;
  recommendations: Article[];
}

const ArticlePage: React.FC<Props> = ({ article, recommendations }) => {
  return (
    <PageBox>
      <NavBar />
      <ArticleContainer article={article} recommendations={recommendations} />
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

    const recommendations = await getRecommendations(article);

    const htmlContent = new ArticleMarkdownParser(article.content);
    const referencesHtmlContent = new ArticleMarkdownParser(article.references);

    await htmlContent.parse();
    await referencesHtmlContent.parse({
      htmlElementTransformer: { anchor: { aditionalRel: ["nofollow"] } },
    });

    const bullets = htmlContent.getBulletPoints(article.bulletPoints);

    return {
      props: {
        article: {
          ...article,
          content: htmlContent.getRawHtml(),
          rawContent: article.content,
          references: referencesHtmlContent.getRawHtml(),
          bulletPoints: bullets,
        },
        recommendations,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};

export const getRecommendations = async (
  article: Article
): Promise<Article[]> => {
  const sameCategory = await articleRepository.getArticles({
    limit: 1,
    excludeSlugs: [article.slug],
    category: article.category.slug as CategoriesEnum,
  });

  const otherCategories = await articleRepository.getArticles({
    limit: 2,
    excludeSlugs: [article.slug],
    excludeCategory: article.category.slug as CategoriesEnum,
  });

  return [...sameCategory, ...otherCategories];
};

export default ArticlePage;
