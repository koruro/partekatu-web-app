import React from "react";
import { Article } from "../../models/Article";
import ArticleCard from "../Articles/ArticleCard/ArticleCard";

const EuskaltegiRecomendationSnippet: React.FC<{ article: Article }> = ({
  article,
}) => {
  return (
    <section
      style={{
        alignSelf: "flex-start",
        maxWidth: "700px",
        marginTop: "2rem",
      }}
    >
      <p
        style={{
          color: "white",
          fontSize: "1.2em",
          fontWeight: "bold",
          backgroundColor: "var(--primary)",
          padding: "0.3rem 0.7rem",
          display: "inline-block",
        }}
      >
        También tenemos para ti
      </p>
      <ArticleCard
        banner={article.banner}
        category={article.category}
        emoji={article.emoji}
        title={article.title}
        altTitle={article.metadata.title_alt}
        description={article.description}
        slug={article.slug}
      />
    </section>
  );
};

export default EuskaltegiRecomendationSnippet;
