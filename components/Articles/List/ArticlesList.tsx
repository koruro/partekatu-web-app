import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleSkeletonCard from "../ArticleCard/Skeleton/ArticleSkeletonCard";
import styles from "./styles.module.css";
import { Article } from "../../../models/Article";
import classNames from "classnames";
import ArticleListItemAd from "../../Ads/ArticleListItemAd";

interface Props {
  data: Article[];
  isLoading?: boolean;
  numFetched?: number;
  highlightFirst?: boolean;
  useGrid?: boolean;
}

const ArticleList: React.FC<Props> = ({
  data,
  isLoading,
  numFetched,
  useGrid,
}) => {
  if (isLoading)
    return (
      <div
        className={classNames(styles["articles-list"], {
          [`${styles["articles-list--use-grid"]}`]: useGrid ?? true,
        })}
      >
        {[...Array(numFetched)].map((_, i) => (
          <ArticleSkeletonCard key={i} />
        ))}
      </div>
    );
  if (!data) return null;
  const articles = data.map((article) => (
    <ArticleCard
      key={article.id}
      banner={article.banner}
      category={article.category}
      emoji={article.emoji}
      title={article.title}
      altTitle={article.metadata.title_alt}
      description={article.description}
      slug={article.slug}
    />
  ));
  if (articles.length >= 2) {
    articles.splice(2, 0, <ArticleListItemAd />);
  }
  return (
    <div
      className={classNames(styles["articles-list"], {
        [`${styles["articles-list--use-grid"]}`]: useGrid ?? true,
      })}
    >
      {articles}
    </div>
  );
};

export default ArticleList;
