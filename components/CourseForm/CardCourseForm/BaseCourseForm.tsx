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
          <p text-align: center>
            <b></b><a href="curso-euskera-online" target="_blank"></b>
              ¡Échale un vistazo 😉!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
