import {
	getFacebookShareLink,
	getTwitterShareLink,
	getWhatsappShareLink,
} from "../../utils/getSocialShareLinks";
import ShareButton from "../Shared/ShareButton/ShareButton";
import SocialIcon from "../Shared/SocialIcon";
import styles from "./styles.module.css";
import TranslatedSentenceCard from "./TranslatedSentenceCard";
import { useRef } from "react";
import { SITE_URL } from "../../utils/constants";

interface Props {
	index: number;
}

const TranslatedSentence: React.FC<Props> = ({ children, index }) => {
	const cardRef = useRef(null);

	const originalSentence = (children as any[]).find((c) => c.type === "p")
		?.props?.children;
	const translatedSentece = (children as any[]).find((c) => c.type === "span")
		?.props?.children;
	const imgSource = (children as any[]).find((c) => c.type === "img")?.props
		?.src;

	return (
		<div className={styles["translated-sentence__container"]}>
			<div className={styles["translated-sentence__share"]}>
				<ShareButton
					getPath={() => {
						return getWhatsappShareLink(originalSentence);
					}}
				>
					<SocialIcon social="whatsapp"></SocialIcon>
				</ShareButton>
				<ShareButton
					getPath={() => {
						const message = `${originalSentence}\n\nDesde ${SITE_URL}`;

						return getTwitterShareLink(message);
					}}
				>
					<SocialIcon social="twitter"></SocialIcon>
				</ShareButton>
				<ShareButton
					getPath={() => {
						return getFacebookShareLink(
							"Frases en euskera",
							originalSentence,
							SITE_URL
						);
					}}
				>
					<SocialIcon social="facebook"></SocialIcon>
				</ShareButton>
			</div>
			<TranslatedSentenceCard
				cardRef={cardRef}
				originalSentence={originalSentence}
				translatedSentece={translatedSentece}
				imgSource={imgSource}
				index={index}
			/>
		</div>
	);
};

export default TranslatedSentence;
