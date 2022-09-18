import { CategoriesDict } from "../../components/Categories/categories";
import PageContainerBox from "../../components/Page/PageContainerBox/PageContainerBox";
import Button from "../../components/Shared/Buttons/ButtonLink";
import styles from "./styles.module.css";
import { Category } from "../../models/Category";
import { Article } from "../../models/Article";
import HomeArticleList from "../../components/Articles/HomeArticleList/HomeArticlesList";
import { CategoriesEnum } from "../../types/categories";
import EuskaltegiRecomendationSnippet from "../../components/Euskaltegi/EuskaltegiRecomendationSnippet";
import { getEuskaltegiFakeArticle } from "../../components/Euskaltegi/getEuskaltegiFakeArticle";

interface Props {
  category: Category;
  newArticles: Article[];
  highlightedArticles: Article[];
}

const euskaltegiFinderArticle = getEuskaltegiFakeArticle();

const CategoryContainer: React.FC<Props> = ({
  category,
  newArticles,
  highlightedArticles,
}) => {
  return (
    <PageContainerBox breakLimit="xl">
      <div className={styles["category-container"]}>
        <h1
          className={
            styles[
              `category-container__title__underline--${
                CategoriesDict[category.slug as CategoriesEnum].slug
              }`
            ]
          }
        >
          {category.name}
        </h1>
        <div
          className={styles["category-container__description"]}
          dangerouslySetInnerHTML={{ __html: category.description ?? "" }}
        />
        <HomeArticleList
          newArticles={newArticles}
          highlightedArticles={highlightedArticles}
        />
        <Button
          href={`/articulos?cat=${category.slug}&p=0`}
          className={styles["category-container__button"]}
          style={{ marginTop: "5rem" }}
        >
          Ver más artículos
        </Button>
        {category.slug === CategoriesEnum.BLOG && (
          <EuskaltegiRecomendationSnippet article={euskaltegiFinderArticle} />
        )}
      </div>
    </PageContainerBox>
  );
};

export default CategoryContainer;
