/* eslint-disable @next/next/no-img-element */
import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";
import styles from "./styles.module.css";

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
                src="https://iframe.mediadelivery.net/embed/107244/265274b7-30c1-4d7d-80f1-6d832c283e1b?autoplay=false"
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
              🥽 Sumérgete en el euskera
            </h2>
            <div className={styles["video-section__text"]}>
              <div
                style={{
                  color: "var(--text-subtle)",
                  fontSize: "1.2rem",
                }}
              >
                <p>
                  Adquirirás las bases del euskera en poco tiempo y a tu ritmo.
                  Para eso, aprenderás mediante vídeos, infografías y ejercicios
                  😉.
                </p>
                <div className={styles["video-section__features"]}>
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "var(--text)",
                    }}
                  >
                    Este curso es para ti si...
                  </h3>
                  <div className={styles["video-section__feature"]}>
                    <span>🎁</span>
                    <span>
                      Quieres conocer y empaparte de la cultura vasca que rodea
                      al euskera
                    </span>
                  </div>
                  <div className={styles["video-section__feature"]}>
                    <span>🧘‍♀️</span>
                    <span>
                      Quieres aprender los fundamentos del euskera desde 0
                    </span>
                  </div>
                  <div className={styles["video-section__feature"]}>
                    <span>🌏</span>
                    <span>
                      Quieres poder viajar por el País Vasco comunicándote en
                      euskera
                    </span>
                  </div>
                </div>
              </div>
              <img
                decoding="async"
                loading="lazy"
                src="course-landing/Camping_Isometric.png"
                width="100%"
                alt=""
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
