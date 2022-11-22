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
          <Link href="/quienes-somos">
            <a>
              <small>Quiénes somos</small>
            </a>
          </Link>
          <Link href="/legal">
            <a>
              <small>Aviso legal</small>
            </a>
          </Link>
          <Link href="/privacidad">
            <a>
              <small>Politica de privacidad</small>
            </a>
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
