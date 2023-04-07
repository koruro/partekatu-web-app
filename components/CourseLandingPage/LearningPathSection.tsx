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
            🌟 Aprende de manera{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#5EAF00",
              }}
            >
              eficaz
            </span>
          </h2>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "var(--text-subtle)",
              maxWidth: "600px",
            }}
          >
            <p>
              Perfectamente adaptado a tus necesidades y horarios. Aprende desde
              la comodidad de tu casa.
            </p>
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
            <p>
              Este curso ha sido diseñado para ofrecerte una experiencia de
              aprendizaje de calidad, adaptada a tus necesidades y horarios.
            </p>
          </div>
          <div className={styles["learn_path__elements"]}>
            <div className={styles["learn_path__feature"]}>
              <img
                src="course-landing/videos.png"
                style={{
                  height: "100px",
                }}
              ></img>
              <span>Videos cortos y concisos</span>
              <p>
                Videos rapidos y directos al grano. Listos para ver en cualquier
                momento.
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
                Videos rapidos y directos al grano. Listos para ver en cualquier
                elit. Voluptatum accusantium dolore.
              </p>
            </div>
            <div className={styles["learn_path__feature"]}>
              <img
                src="course-landing/exams.png"
                style={{
                  height: "100px",
                }}
              ></img>
              <span>Cuestionarios y exámenes</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum accusantium dolore.
              </p>
            </div>
            <div className={styles["learn_path__feature"]}>
              <img
                src="course-landing/exams.png"
                style={{
                  height: "100px",
                }}
              ></img>
              <span>Algo más</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum accusantium dolore.
              </p>
            </div>
          </div>
        </div>
      </PageContainerBox>
    </section>
  );
};

export default LearningPathSection;
