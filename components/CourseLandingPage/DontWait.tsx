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
        Comienza tu aprendizaje ahora!
      </h3>
      <p
        style={{
          color: "var(--text-subtle)",
        }}
      >
        No esperes más y clicka aquí para unirte al curso y comenzar a aprender
      </p>
      <a
        className={[
          styles["basic-course-lp__button"],
          "hoverable-elevate",
          "button-padding-2",
        ].join(" ")}
      >
        Unete ahora 🎉
      </a>
    </section>
  );
};

export default DontWait;
