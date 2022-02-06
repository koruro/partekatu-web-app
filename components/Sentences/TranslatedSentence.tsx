import styles from "./styles.module.css";
import TranslatedSentenceCard from "./TranslatedSentenceCard";
import ShareButton, { SocialType } from "../Shared/ShareButton/ShareButton";

interface Props {}

const TranslatedSentence: React.FC<Props> = ({ children }) => {
	const originalSentence = (children as any[]).find((c) => c.type === "p")
		?.props?.children;
	const translatedSentece = (children as any[]).find((c) => c.type === "span")
		?.props?.children;
	const imgSource = (children as any[]).find((c) => c.type === "img")?.props
		?.src;

	return (
		<div className={styles["translated-sentence__container"]}>
			<TranslatedSentenceCard
				originalSentence={originalSentence}
				translatedSentece={translatedSentece}
				imgSource={imgSource}
			/>
			<div className={styles["translated-sentence__share"]}>
				<TranslatedShareButton social="facebook" />
				<TranslatedShareButton social="twitter" />
			</div>
		</div>
	);
};

interface TButtonProps {
	social: SocialType;
}

const TranslatedShareButton: React.FC<TButtonProps> = ({ social }) => {
	return (
		<div className={styles["translated-sentence__share__button"]}>
			<ShareButton social={social} path="as" />
			<p>Compartir en {social}</p>
		</div>
	);
};

export default TranslatedSentence;
