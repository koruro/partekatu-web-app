import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./styles.module.css";
import { Article } from "../../../models/Article";

interface Props {
  newArticles: Article[];
  highlightedArticles: Article[];
}

const HomeArticleList: React.FC<Props> = ({
  highlightedArticles,
  newArticles,
}) => {
  return (
    <div className={styles["home-articles"]}>
      <div className={styles["home-articles__highlights"]}>
        {highlightedArticles.map((highlight) => (
          <ArticleCard
            key={highlight.slug}
            banner={highlight.banner}
            category={highlight.category}
            emoji={highlight.emoji}
            title={highlight.title}
            description={highlight.description}
            // metaTitle={highlight.meta_title}
            altTitle={highlight.metadata.title_alt}
            slug={highlight.slug}
            large
          />
        ))}
      </div>
      {newArticles.length > 0 && (
        <>
          <h2 className={styles["home-articles-list__news-title"]}>
            Novedades
          </h2>
          <div className={styles["home-articles__news"]}>
            {newArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                banner={article.banner}
                category={article.category}
                emoji={article.emoji}
                title={article.title}
                altTitle={article.metadata.title_alt}
                description={article.description}
                slug={article.slug}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeArticleList;
