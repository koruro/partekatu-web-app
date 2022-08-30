import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  slug: string;
  title: string;
  emoji: string;
  large?: boolean;
}

const MinimalArticleCard: React.FC<Props> = ({ emoji, title, slug, large }) => {
  return (
    <a href={`/${slug}`} style={{ color: "var(--text)" }}>
      <div
        className={classNames(
          styles["article-card"],
          "hoverable-elevate",
          "elevate-2",
          {
            [styles["article-card--large"]]: large,
          }
        )}
      >
        <span className={styles["article-card__emoji"]}>{emoji}</span>
        <span className={styles["article-card__title"]}>{title}</span>
      </div>
    </a>
  );
};

export default MinimalArticleCard;
