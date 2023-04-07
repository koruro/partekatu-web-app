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
            😉 Opiniones de estudiantes
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
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam qui adipisci obcaecati sequi sint numquam itaque,
                  saepe accusantium!”
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img src="course-landing/alumno_1.jpg"></img>
                  <span>Leire Portu Etxebarria</span>
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
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam qui adipisci ”
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img src="course-landing/alumno_1.jpg"></img>
                  <span>Leire Portu Etxebarria</span>
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
