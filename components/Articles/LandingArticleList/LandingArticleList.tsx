import ArticleSkeletonCard from "../ArticleCard/Skeleton/ArticleSkeletonCard";
import styles from "./styles.module.css";
import { Article } from "../../../models/Article";
import classNames from "classnames";
import MinimalArticleCard from "../MinimalArticleCard/MinimalArticleCard";

interface Props {
  data: Article[];
  isLoading?: boolean;
  numFetched?: number;
  highlightFirst?: boolean;
  useGrid?: boolean;
}

const LandingArticleList: React.FC<Props> = ({
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
  return (
    <div
      className={classNames(styles["articles-list"], {
        [`${styles["articles-list--use-grid"]}`]: useGrid ?? true,
      })}
    >
      {data.map((article) => (
        <MinimalArticleCard
          key={article.id}
          emoji={article.emoji}
          title={article.title}
          slug={article.slug}
        />
      ))}
    </div>
  );
};

export default LandingArticleList;
