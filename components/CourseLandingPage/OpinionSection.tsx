import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";
import styles from "./styles.module.css";

const OpinionSection = () => {
  return (
    <section
      className={styles["opsection"]}
      style={{
        marginTop: "3rem",
        padding: "4rem 0",
      }}
    >
      <PageContainerBox breakLimit="lg">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              textAlign: "center",
              fontSize: "1.6rem",
            }}
          >
            😉 Opiniones de nuestros estudiante
          </h2>
          <div className={styles["opsection__opinions"]}>
            <div
              className={styles["opsection__opinion"]}
              style={{
                position: "relative",
              }}
            >
              <div className={styles["opsection__opinion__back"]}></div>
              <div className={styles["opsection__opinion__front"]}>
                <p
                  style={{
                    color: "var(--text-subtle)",
                    fontStyle: "italic",
                  }}
                >
                  “El curso es breve y te da esas bases para seguir aprendiendo
                  euskera. Lo recomiendo como iniciación al idioma.”
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img src="course-landing/alumno_1.jpg"></img>
                  <span>Ana Alonso</span>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <div className={styles["opsection__opinion__back"]}></div>
              <div className={styles["opsection__opinion__front"]}>
                <p
                  style={{
                    color: "var(--text-subtle)",
                    fontStyle: "italic",
                  }}
                >
                  “Creo que he aprendido mucho con los vídeos y las infografías
                  me han ayudado mucho para que nada se me olvide. Muchas
                  gracias!!”
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img src="course-landing/alumno_2.jpg"></img>
                  <span>María Ramos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainerBox>
    </section>
  );
};

export default OpinionSection;
