import { Dispatch, SetStateAction } from "react";
import SubscribeLoadingButton from "../LoadingButton/SubscribeLoadingButton";
import styles from "./styles.module.css";

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setTermsAccepted: Dispatch<SetStateAction<boolean>>;
  submitEnabled: boolean;
  loading: boolean;

  ignoreForm: () => any;
  submitForm: () => any;
}

const BaseCourseForm: React.FC<Props> = ({
  submitForm,
  email,
  setEmail,
  ignoreForm,
  loading,
  setTermsAccepted,
  submitEnabled,
}) => {
  return (
    <>
      <div>
        <span
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
          }}
        >
          📖 ¿Sabías que tenemos un curso de euskera online desde 0?
        </span>
        <div
          style={{
            color: "var(--text-subtle)",
          }}
        >
          <p>
            Está formado por lecciones con vídeos, materiales y ejercicios
            interactivos.
          </p>
          <p>
            <a href="curso-euskera-online" target="_blank">
              ¡Échale un vistazo 😉!
            </a>
          </p>
        </div>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.4rem",
        }}
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await submitForm();
          } catch (error) {}
        }}
      >
        <input
          className={styles["course-subscribe-form__input"]}
          aria-label="email"
          aria-required="true"
          type="email"
          placeholder="example@email.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          style={{
            display: "flex",
            alignItems: "start",
            gap: ".4rem",
            fontSize: ".8rem",
            color: "var(--text-subtle)",
          }}
        >
          <input
            className={styles["course-subscribe-form__terms-check"]}
            type="checkbox"
            id="course-form-subscription"
            onChange={(e) => {
              setTermsAccepted(e.target.checked);
            }}
          />
          <span>
            He podido leer y entiendo la información sobre el uso de mis datos
            personales explicada en la{" "}
            <a href="privacidad" target="_blank">
              política de privacidad
            </a>
          </span>
        </label>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <SubscribeLoadingButton enable={submitEnabled} isLoading={loading} />
          <button
            type="reset"
            style={{
              border: "none",
              background: "transparent",
              textDecoration: "underline",
              color: "var(--primary)",
            }}
            onClick={ignoreForm}
          >
            No me interesa
          </button>
        </div>
      </form>
    </>
  );
};

export default BaseCourseForm;
