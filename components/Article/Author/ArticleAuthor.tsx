import styles from "./styles.module.css";

interface ArticleAuthorProps {
  author?: string;
  readingTime?: number;
}
const ArticleAuthor: React.FC<ArticleAuthorProps> = ({
  author,
  readingTime,
}) => {
  return (
    <section className={styles["article-author"]}>
      <a className={styles["article-author__info"]} href="quienes-somos">
        <i>por</i>
        <div className={styles["article-author__name"]}>{author}</div>-
      </a>
      <div className={styles["article-author__reading-time"]}>
        {readingTime} min lectura
      </div>
    </section>
  );
};

export default ArticleAuthor;
