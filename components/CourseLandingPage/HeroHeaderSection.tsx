import Image from "next/image";
import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";
import styles from "./styles.module.css";

interface Props {
  onCTAClick: () => any;
}
const HeroHeaderSection: React.FC<Props> = ({ onCTAClick }) => {
  return (
    <header>
      <PageContainerBox breakLimit="xl">
        <div className={styles["hero"]}>
          <div className={styles["hero__text"]}>
            <div className={styles["hero__title"]}>
              <h1>Curso de euskera online desde 0</h1>
              <span>Comunícate en euskera con total seguridad</span>
            </div>
            <p>
              Aprende euskera <b>desde cero</b> y utilízalo en situaciones
              cotidianas de forma sencilla y efectiva.
            </p>
            <div
              style={{
                marginTop: "3rem",
              }}
            >
              <div className={styles["hero__price-button"]}>
                <div>
                  <span>€</span>
                  <span
                    style={{
                      color: "var(--text-subtle)",
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                    }}
                  >
                    19,99
                  </span>
                </div>
                <a
                  href="https://curso.partekatu.com/step/curso-euskera-basico/"
                  onClick={onCTAClick}
                  target="__blank"
                  rel="noopener noreferrer"
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
