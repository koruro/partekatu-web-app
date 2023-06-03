import Link from "next/link";
import { HiMail } from "react-icons/hi";
import styles from "./styles.module.css";
import LazyHydrate from "react-lazy-hydration";

const FooterInformation: React.FC = () => {
  return (
    <LazyHydrate ssrOnly>
      <section className={styles["footer"]}>
        <div className={styles["footer__content"]}>
          <a
            className={styles["footer__contact"]}
            href="mailto:partekatu.web@gmail.com"
          >
            <HiMail />
            <small>partekatu.web@gmail.com</small>
          </a>
        </div>
        <div className={styles["footer__links"]}>
          <Link href="/quienes-somos" passHref>
            <small>Quiénes somos</small>
          </Link>
          <Link href="/legal" passHref>
            <small>Aviso legal</small>
          </Link>
          <Link href="/privacidad" passHref>
            <small>Politica de privacidad</small>
          </Link>
        </div>
        <div>
          <Link
            style={{
              margin: "auto",
              marginTop: "1rem",
              width: "30%",
              display: "block",
              textAlign: "center",
            }}
            href="/condiciones-generales-contratacion-reembolsos"
            passHref
          >
            <small>Condiciones generales y Política de Reembolsos</small>
          </Link>
        </div>
        <div className={styles["footer__copyright"]}>
          <small>
            &copy; partekatu.com está licenciada bajo{` `}
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Commons Attribution-NonCommercial 4.0 International
              License.
            </a>
          </small>
          <small>
            Todos los emojis de nuestras imágenes son de{" "}
            <a
              href="https://twemoji.twitter.com/"
              target="_blak"
              rel="noopener noreferrer"
            >
              twemoji
            </a>
          </small>
        </div>
      </section>
    </LazyHydrate>
  );
};

export default FooterInformation;
