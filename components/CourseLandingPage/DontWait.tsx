import styles from "./styles.module.css";

const DontWait = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: "2rem",
          margin: 0,
          marginTop: "1rem",
        }}
      >
        Más de 1.000.000 de personas hablan ya euskera
      </h3>
      <p
        style={{
          color: "var(--text-subtle)",
        }}
      >
        Comienza tu aprendizaje y forma parte de la comunidad vasca. Únete ahora
        🎉
      </p>
      <a
        className={[
          styles["basic-course-lp__button"],
          "hoverable-elevate",
          "button-padding-2",
        ].join(" ")}
      >
        Únete ahora 🎉
      </a>
    </section>
  );
};

export default DontWait;
