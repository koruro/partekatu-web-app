import styles from "./styles.module.css";

interface Props {
  type?: "faq" | "info";
}

const ArticleSectionHeader: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
> = ({ children, type, ...props }) => {
  return (
    <h2
      className={`${styles["article-section__header"]} ${
        type
          ? type === "faq"
            ? styles["article-section__header--faq"]
            : styles["article-section__header--infographic"]
          : ""
      }`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default ArticleSectionHeader;
