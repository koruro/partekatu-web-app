import ShareButton, { SocialType } from "../Shared/ShareButton/ShareButton";
import PartekatuTear from "./PartekatuTear";
import styles from "./styles.module.css";

interface Props {
	originalSentence: string;
	translatedSentece: string;
	imgSource?: string;
}

const getRandomCardImage = (index?: number) => {
	const images = [
		"https://res.cloudinary.com/partekatu/image/upload/v1644355963/gzzte_c0m8bh.png",
		"https://images.unsplash.com/photo-1644091578502-9131622d68b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	];

	let imageIndex = 0;
	if (index !== undefined && index !== null) {
		const factor = Math.floor(index / images.length);

		imageIndex = index - images.length * factor;
	} else {
		imageIndex = Math.round(Math.random() * (images.length - 1));
		console.log(imageIndex);
	}
	return images[imageIndex];
};

const TranslatedSentenceCard: React.FC<Props> = ({
	originalSentence,
	translatedSentece,
	imgSource,
}) => {
	return (
		<div className={styles["translated-sentence__card"]}>
			<div className={styles["translated-sentence__share"]}>
				<TranslatedShareButton social="facebook" />
				<TranslatedShareButton social="twitter" />
			</div>
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
			{imgSource ? (
				<img src={imgSource}></img>
			) : (
				<img src={getRandomCardImage()}></img>
			)}
		</div>
	);
};

interface TButtonProps {
	social: SocialType;
}

const TranslatedShareButton: React.FC<TButtonProps> = ({ social }) => {
	return (
		<div className="elevate-1">
			<ShareButton social={social} path="as" />
		</div>
	);
};

export default TranslatedSentenceCard;
