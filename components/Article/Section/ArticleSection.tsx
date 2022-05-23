import styles from "./styles.module.css";

const ArticleSection: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={[styles["article-section"], props.className].join(" ")}
    >
      {children}
    </div>
  );
};

export default ArticleSection;
