import React from "react";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { HiMail } from "@react-icons/all-files/hi/HiMail";
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
							rel="noopener"
						>
							<FaFacebookSquare size="24px" />
						</a>
						<a target="_blank" rel="noopener">
							<FaTwitterSquare size="24px" />
						</a>
						<a
							href="https://www.instagram.com/partekatu/"
							target="_blank"
							rel="noopener"
						>
							<FaInstagramSquare size="24px" />
						</a>
					</div>
				</div>
				<div className={styles["footer__links"]}>
					<a href="/quienes-somos">
						<small>Quiénes somos</small>
					</a>
					<a href="/legal">
						<small>Aviso legal</small>
					</a>
					<a href="/privacidad">
						<small>Politica de privacidad</small>
					</a>
				</div>
				<div className={styles["footer__copyright"]}>
					<small>
						&copy; partekatu.com está licenciada bajo{` `}
						<a
							href="https://creativecommons.org/licenses/by/4.0/deed.es"
							target="_blank"
							rel="noopener"
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
							rel="noopener"
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
