import Image from "next/image";
import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";
import styles from "./styles.module.css";

const LearningPathSection = () => {
  return (
    <section className={styles["learn_path"]}>
      <PageContainerBox breakLimit="md">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: ".7rem",
          }}
        >
          <h2>
            🌟 ¿Qué vas a aprender?
            {/* <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#5EAF00",
              }}
            >
              eficaz
            </span> */}
          </h2>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "var(--text-subtle)",
              maxWidth: "600px",
            }}
          >
            <ul>
              <li>La cultura vasca</li>
              <li>El alfabeto del euskera junto a su acento y pronunciación</li>
              <li>
                Vocabulario básico y útil (saludos, fórmulas de cortesía,
                afirmación y negación, los números, sustantivos y adjetivos de
                uso cotidiano, etc.)
              </li>
              <li>
                Gramática básica. Todo lo necesario para entender cómo funciona
                el euskera.
              </li>
              <li>Cómo formular y responder a preguntas del día a día.</li>
            </ul>
            <img
              alt="estudia en casa"
              // layout="responsive"
              // width="900px"
              // height="600px"
              style={{
                maxWidth: "400px",
                width: "100%",
              }}
              src="course-landing/study_home.png"
            ></img>
            <p>Todo esto mediante...</p>
          </div>
          <div className={styles["learn_path__elements"]}>
            <div className={styles["learn_path__feature"]}>
              <img
                src="course-landing/videos.png"
                style={{
                  height: "100px",
                }}
              ></img>
              <span>Videos cortos y cercanos</span>
              <p>
                26 vídeos directos al grano (2-10 mins) llenos de ejemplos para
                que entiendas todo.
              </p>
            </div>
            <div className={styles["learn_path__feature"]}>
              <Image
                alt="infografias"
                src="/course-landing/infographic.png"
                width="160"
                height="100"
              ></Image>
              <span>Infografias</span>
              <p>
                Coloridos esquemas que resumen los contenidos presentados en los
                vídeos.
              </p>
            </div>
            <div className={styles["learn_path__feature"]}>
              <img
                src="course-landing/exams.png"
                style={{
                  height: "100px",
                }}
              ></img>
              <span>Tests sobre lo aprendido</span>
              <p>
                Cuestionarios con preguntas para que consolides los contenidos
                presentados en los vídeos.
              </p>
            </div>
          </div>
        </div>
      </PageContainerBox>
    </section>
  );
};

export default LearningPathSection;
