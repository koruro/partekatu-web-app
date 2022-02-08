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
		</div>
	);
};

export default TranslatedSentence;
