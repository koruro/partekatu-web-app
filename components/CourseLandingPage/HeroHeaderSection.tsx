import Image from "next/image";
import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";
import styles from "./styles.module.css";

const HeroHeaderSection = () => {
  return (
    <header>
      <PageContainerBox breakLimit="xl">
        <div className={styles["hero"]}>
          <div className={styles["hero__text"]}>
            <div className={styles["hero__title"]}>
              <span>Aprende euskera hoy mismo</span>
              <h1>Curso de euskera básico online</h1>
            </div>
            <p>
              Aprende <b>desde cero</b> y comunícate en situaciones cotidianas
              de forma sencilla y efectiva.
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
                Únete ahora 🎉
              </a>
            </div>
          </div>
          <div className={styles["hero__img"]}>
            <Image priority alt="" src="course-landing/eusk_map.svg" fill />
          </div>
        </div>
      </PageContainerBox>
    </header>
  );
};

export default HeroHeaderSection;
