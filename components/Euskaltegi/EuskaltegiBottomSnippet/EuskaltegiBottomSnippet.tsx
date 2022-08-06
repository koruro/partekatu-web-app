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
          Y, <b>¡Escucha!</b> Ir al euskaltegi es una gran forma de aprender
          euskera, pero que sepas que{" "}
          <b>también puedes aprender euskera online gratis en nuestra web.</b>
        </p>
        <p>
          Para ello tenemos un{" "}
          <a
            href="/curso-euskera-online"
            target="__blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            curso de euskera online
          </a>{" "}
          con el que podrás ir aprendiendo euskera a tu ritmo 😉.
        </p>
        <p>
          Y, ya de paso, aquí abajo te dejamos{" "}
          <b>varios artículos sobre el euskera que tal vez te interesen:</b>
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
