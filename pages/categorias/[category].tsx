import { GetStaticPaths, GetStaticProps } from "next";
import { CategoriesDict } from "../../components/Categories/categories";
import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageBox from "../../components/Page/PageBox/PageBox";
import CategoryContainer from "../../containers/Category/CategoryContainer";
import { Article } from "../../models/Article";
import { Category } from "../../models/Category";
import { articleRepository } from "../../services/bootstrap";
import { CategoriesEnum } from "../../types/categories";
import { ArticleMarkdownParser } from "../../utils/markdownToHtml";

const headTitle = (category: string) => `${category} - partekatu.com`;

interface Props {
  category: Category;
  newArticles: Article[];
  highlightedArticles: Article[];
}

const CategoryPage: React.FC<Props> = ({
  category,
  newArticles,
  highlightedArticles,
}) => {
  if (!category) return null;
  return (
    <>
      <CustomHead
        title={headTitle(category.title)}
        metaTitle={category.seoMetadata?.metaTitle}
        metaDesc={category.seoMetadata?.metaDesc}
      />
      <PageBox className="home">
        <NavBar />
        <CategoryContainer
          category={category}
          newArticles={newArticles}
          highlightedArticles={highlightedArticles}
        />
        <Footer />
      </PageBox>
    </>
  );
};

// Get all categories paths
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await articleRepository.getCategories();

  const paths = categories
    .filter((category) => category.slug in CategoriesDict)
    .map((category: any) => ({
      params: { category: category.slug },
    }));

  return { paths, fallback: false };
};

// Get static props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    // Fetch article and recommendations data
    // Fetch the category by slug
    const category = await articleRepository.getCategoryBySlug(
      (params?.category as string) ?? ""
    );

    // Render html of the category description
    const description = new ArticleMarkdownParser(category.description ?? "");
    await description.parse();

    const highlightedArticles = await getHighlightArticles(
      category.slug as CategoriesEnum
    );
    const newArticles = await getNewArticles(
      category.slug as CategoriesEnum,
      highlightedArticles
    );

    return {
      props: {
        category: { ...category, description: description.getRawHtml() },
        newArticles,
        highlightedArticles,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};

async function getHighlightArticles(category: CategoriesEnum) {
  try {
    const articles = await articleRepository.getHighlightArticles({
      category,
      limit: 2,
    });

    return articles;
  } catch (error) {
    return [];
  }
}

async function getNewArticles(category: CategoriesEnum, exclude: Article[]) {
  try {
    return await articleRepository.getArticles({
      category,
      limit: 4,
      excludeSlugs: exclude.map((highlight) => highlight.slug),
    });
  } catch (error) {
    return [];
  }
}

export default CategoryPage;
