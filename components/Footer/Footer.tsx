import Link from "next/link";
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaInstagramSquare,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import styles from "./styles.module.css";
import LazyHydrate from "react-lazy-hydration";

const Footer: React.FC = () => {
	return (
		<LazyHydrate ssrOnly>
			<footer className={styles["footer"]}>
				<div className={styles["footer__content"]}>
					<a
						className={styles["footer__contact"]}
						href="mailto:partekatu.web@gmail.com"
					>
						<HiMail />
						<small>partekatu.web@gmail.com</small>
					</a>
					<div className={styles["footer__socials"]}>
						<a
							href="https://www.facebook.com/partekatu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookSquare size="24px" />
						</a>
						<a target="_blank" rel="noopener noreferrer">
							<FaTwitterSquare size="24px" />
						</a>
						<a
							href="https://www.instagram.com/partekatu/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagramSquare size="24px" />
						</a>
					</div>
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
							href="https://creativecommons.org/licenses/by/4.0/deed.es"
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
			</footer>
		</LazyHydrate>
	);
};

export default Footer;
