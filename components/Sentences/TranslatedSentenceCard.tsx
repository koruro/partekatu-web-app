import PartekatuTear from "./PartekatuTear";
import styles from "./styles.module.css";

interface Props {
	originalSentence: string;
	translatedSentece: string;
	imgSource: string;
}

const TranslatedSentenceCard: React.FC<Props> = ({
	originalSentence,
	translatedSentece,
	imgSource,
}) => {
	return (
		<div className={styles["translated-sentence__card"]}>
			<div className={styles["translated-sentence__tears"]}>
				<PartekatuTear
					width={70}
					style={{ position: "absolute", left: "0px" }}
				/>
				<PartekatuTear
					width={70}
					style={{ position: "absolute", left: "30px" }}
				/>
			</div>
			<div className={styles["translated-sentence__sentence"]}>
				<p>{originalSentence}</p>
				<span>{translatedSentece}</span>
			</div>
			<img src={imgSource}></img>
		</div>
	);
};

export default TranslatedSentenceCard;
