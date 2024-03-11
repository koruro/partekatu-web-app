import { useRouter } from "next/router";
import styles from "./styles.module.css";
import {
  CoursePopupData,
  CoursePopupState,
  useCoursePopupDataStorage,
} from "../CourseForm/useCoursePopupStorage";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const BANNER_HIDE_DURATION = 1000 * 60 * 60 * 24;

function showPopup(path: string, popup?: CoursePopupData): boolean {
  if (!popup) return false;
  if (path === "/curso-euskera-online") return false;

  // Do not show banner if user has clicked CTA
  if (popup.state === CoursePopupState.CLICKED) return false;
  if (popup.state === CoursePopupState.DEFAULT) return true;

  // If VISITED or CLOSED, wait 1 day to show it again
  return new Date().getTime() - popup.at.getTime() >= BANNER_HIDE_DURATION;
}

const FixedCoursePopup: React.FC<Props> = ({}) => {
  const { popupData, setPopupData } = useCoursePopupDataStorage();
  const { asPath } = useRouter();

  if (!showPopup(asPath, popupData)) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: 2,
        maxWidth: "600px",
        margin: "1rem",
      }}
    >
      <div className={styles["basic-course-popup"]}>
        <span
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
          }}
        >
          📖 Aprende euskera desde 0 con nuestro curso online
        </span>
        <div
          style={{
            color: "var(--text-subtle)",
          }}
        >
          <p>
            ¡Oye! <b>¿Sabías que en nuestra web tenemos un curso con el que aprenderás
            euskera a tu ritmo?</b> Está formado por vídeos, infografías y ejercicios.
          </p>
          <p>Si te interesa, <b>¡Haz clic y échale un vistazo!</b> 😉</p>
          <div style={{ marginTop: "2rem" }}>
            <a
              href="curso-euskera-online"
              className={[
                styles["lp__button"],
                "hoverable-elevate",
                "button-padding-2",
              ].join(" ")}
            >
              Ir al curso 🎉
            </a>
            <button
              className={styles["lp__button_close"]}
              onClick={() => {
                setPopupData(
                  new CoursePopupData(new Date(), CoursePopupState.CLOSED)
                );
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedCoursePopup;
