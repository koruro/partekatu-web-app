import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";
import styles from "./styles.module.css";

const FrameButton = ({}) => {
  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "100%",
        backgroundColor: "rgb(255, 59, 48)",
      }}
    ></div>
  );
};

const VideoSection = () => {
  return (
    <section className={styles["video-section"]}>
      <PageContainerBox breakLimit="lg">
        <div>
          <div className={styles["video-section__frame"]}>
            <div
              style={{
                display: "flex",
                gap: "8px",
                position: "absolute",
                top: "8px",
                left: ".8rem",
              }}
            >
              <div
                className={[
                  styles["video-section__frame__button"],
                  styles["video-section__frame__button--red"],
                ].join(" ")}
              />
              <div
                className={[
                  styles["video-section__frame__button"],
                  styles["video-section__frame__button--green"],
                ].join(" ")}
              />
              <div
                className={[
                  styles["video-section__frame__button"],
                  styles["video-section__frame__button--yellow"],
                ].join(" ")}
              />
            </div>
            <div
              style={{
                padding: ".4rem",
                paddingBottom: ".2rem",
                paddingTop: "1.6rem",
                border: "none",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <iframe
                src="https://iframe.mediadelivery.net/embed/107244/734172ed-d330-4b56-9456-fd6feebe4f1d?autoplay=false"
                loading="lazy"
                style={{
                  border: "none",
                  width: "100%",
                  borderRadius: "var(--rounded-s)",
                  height: "100%",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles["video-section__content"]}>
            <h2 className={styles["video-section__title"]}>
              🥽 Sumergete en el euskera
            </h2>
            <div className={styles["video-section__text"]}>
              <div
                style={{
                  color: "var(--text-subtle)",
                  fontSize: "1.2rem",
                }}
              >
                <p>
                  En este curso te ofrecemos un enfoque práctico y dinámico para
                  que puedas adquirir las bases del euskera en poco tiempo.
                </p>
                <p>
                  Aprenderás a comunicarte en situaciones cotidianas y podrás
                  avanzar a tu propio ritmo. Además, contarás con el apoyo y la
                  guía de nuestros profesores especializados en euskera.
                </p>
                <div className={styles["video-section__features"]}>
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "var(--text)",
                    }}
                  >
                    Que vas a ganar:
                  </h3>
                  <div className={styles["video-section__feature"]}>
                    <span>🎁</span>
                    <span>
                      Aprende el idioma desde 0, sin ningun conocimiento previo
                    </span>
                  </div>
                  <div className={styles["video-section__feature"]}>
                    <span>🧘‍♀️</span>
                    <span>
                      Comunicate en situaciones cotidianas sin problema
                    </span>
                  </div>
                  <div className={styles["video-section__feature"]}>
                    <span>🌏</span>
                    <span>
                      Viaja por Euskadi y enriquecete de la cultura vasca
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="course-landing/Camping_Isometric.png"
                width="100%"
              ></img>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </PageContainerBox>
    </section>
  );
};

export default VideoSection;
