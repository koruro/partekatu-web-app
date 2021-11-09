import { useRouter } from "next/router";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import LazyHydrate from "react-lazy-hydration";
import {
	getFacebookShareLink,
	getTwitterShareLink,
} from "../../../utils/getSocialShareLinks";
import LogoSocial from "../../Shared/LogoSocial";
import ArticleSection from "../Section/ArticleSection";
import ArticleSectionHeader from "../Section/ArticleSectionHeader";
import styles from "./styles.module.css";

interface Props {
	title: string;
}

const ArticleSocials: React.FC<Props> = ({ title }) => {
	const { asPath } = useRouter();

	return (
		<LazyHydrate ssrOnly>
			<ArticleSection>
				<ArticleSectionHeader id="share">¡Comparte!</ArticleSectionHeader>
				<div className={styles["article-socials"]}>
					<LogoSocial />
					<p>
						¡<strong>Ayúdanos</strong> a que este artículo llegue a más personas{" "}
						<strong>compartiéndolo</strong> por tu <strong>red social</strong>{" "}
						favorita! ¡Nosotros agradeceremos infinitamente tu ayuda!
					</p>
				</div>
				<div className={styles["article-socials__icons"]}>
					<a
						href={getFacebookShareLink(asPath)}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="share with Facebook"
					>
						<FaFacebookSquare size="42px" fill="#3b5998" />
					</a>
					<a
						href={getTwitterShareLink(asPath, title)}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="share with Twitter"
					>
						<FaTwitterSquare size="42px" fill="#00acee" />
					</a>
				</div>
			</ArticleSection>
		</LazyHydrate>
	);
};

export default ArticleSocials;
