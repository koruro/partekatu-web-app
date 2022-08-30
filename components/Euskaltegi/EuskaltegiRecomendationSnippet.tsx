import React from "react";
import { Article } from "../../models/Article";
import MinimalArticleCard from "../Articles/MinimalArticleCard/MinimalArticleCard";

const EuskaltegiRecomendationSnippet: React.FC<{ article: Article }> = ({
  article,
}) => {
  return (
    <section
      style={{
        margin: "auto",
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "var(--text-subtle)",
          fontSize: "1.1em",
          fontStyle: "italic",
        }}
      >
        También tenemos para ti
      </p>
      <MinimalArticleCard
        emoji={article.emoji}
        title={article.title}
        slug={article.slug}
      />
    </section>
  );
};

export default EuskaltegiRecomendationSnippet;
