import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";
import Blob1 from "../assets/Blob1";
import styles from "./styles.module.css";

const HeroHeaderSection = () => {
  return (
    <header>
      <PageContainerBox breakLimit="xl">
        <div className={styles["hero"]}>
          <div className={styles["hero__text"]}>
            <h1>
              Aprende euskera hoy mismo
              <span
                className={styles["basic-course-lp__h-title"]}
                style={{
                  display: "block",
                }}
              >
                Esto es un ejemplo
              </span>
            </h1>
            <p>
              Aprende desde cero y comunícate en situaciones cotidianas de forma
              sencilla y efectiva.
            </p>
            <div
              style={{
                marginTop: "3rem",
              }}
            >
              <a
                className={[
                  styles["basic-course-lp__button"],
                  "hoverable-elevate",
                  "button-padding-2",
                ].join(" ")}
              >
                Unete ahora 🎉
              </a>
            </div>
          </div>
          <div className={styles["hero__img"]}>
            {/* <Blob1 /> */}
            <img
              className={styles["hero__img__blob"]}
              src="blobs/blob-haikei.svg"
            />
            <img
              className={styles["hero__img__eusk"]}
              src="course-landing/vasque_country_map.png"
            ></img>
          </div>
        </div>
      </PageContainerBox>
    </header>
  );
};

export default HeroHeaderSection;
