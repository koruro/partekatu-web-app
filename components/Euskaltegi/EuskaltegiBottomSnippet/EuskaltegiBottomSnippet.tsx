/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { Article } from "../../../models/Article";
import ArticleCard from "../../Articles/ArticleCard/ArticleCard";
import styles from "./styles.module.css";

const EuskaltegiBottomSnippet: React.FC<{
  articleRecommendations: Article[];
}> = ({ articleRecommendations }) => {
  return (
    <section style={{ fontSize: "1.1rem", marginTop: "2rem" }}>
      <h2
        style={{
          color: "white",
          fontSize: "1.5em",
          backgroundColor: "var(--primary)",
          padding: "0.3rem 0.7rem",
          display: "inline-block",
        }}
      >
        ¡Aprende Euskera!
      </h2>
      <div className={styles["euskaltegi-snippet__body"]}>
        <p>
          Humm... Parece que estás intentando aprender Euskera. Haz click{" "}
          <a
            href="/curso-euskera-online"
            target="__blank"
            rel="noopener noreferrer"
          >
            en este enlace
          </a>{" "}
          para acceder a nuestro <b>curso online</b> para que vayas avanzando en
          tus lecciones mientras encuentras un <b>euskaltegi</b>.
        </p>
        <p>
          Aquí podras encontrar todo tipo de artículos para guiarte en el
          idioma. Abajo te dejamos algunos para que les eches un vistazo 😉.
        </p>
        <div style={{ display: "grid", rowGap: "1rem", maxWidth: "800px" }}>
          {articleRecommendations.map((article) => (
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
      </div>
    </section>
  );
};

export default EuskaltegiBottomSnippet;
