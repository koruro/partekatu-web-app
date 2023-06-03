import styles from "./styles.module.css";

interface Props {
  onCTAClick: () => any;
}

const DontWait: React.FC<Props> = ({ onCTAClick }) => {
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
        Comienza tu aprendizaje y forma parte de la comunidad vasca.
      </p>
      <a
        href="https://curso.partekatu.com/step/curso-euskera-basico/"
        target="__blank"
        rel="noopener noreferrer"
        className={[
          styles["basic-course-lp__button"],
          "hoverable-elevate",
          "button-padding-2",
        ].join(" ")}
        onClick={onCTAClick}
      >
        Únete ahora 🎉
      </a>
    </section>
  );
};

export default DontWait;
