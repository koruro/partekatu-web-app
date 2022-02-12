import { MutableRefObject } from "react";
import PartekatuTear from "./PartekatuTear";
import styles from "./styles.module.css";

interface Props {
	cardRef: MutableRefObject<any>;
	originalSentence: string;
	translatedSentece: string;
	index?: number;
	imgSource?: string;
}

const getRandomCardImage = (index?: number) => {
	const images = [
		"https://res.cloudinary.com/partekatu/image/upload/v1644355963/gzzte_c0m8bh.png",
		"https://res.cloudinary.com/partekatu/image/upload/v1644683806/casitas_ksckpo.png",
		"https://res.cloudinary.com/partekatu/image/upload/v1644683794/donos_tsavqa.png",
		"https://res.cloudinary.com/partekatu/image/upload/v1644683800/pampl_mwl8fq.png",
		"https://res.cloudinary.com/partekatu/image/upload/v1644683802/mar_uxmccc.png",
		"https://res.cloudinary.com/partekatu/image/upload/v1644683798/peine_aulezj.png",
		"https://res.cloudinary.com/partekatu/image/upload/v1644683796/guggen_efvi01.png",
		"https://res.cloudinary.com/partekatu/image/upload/v1644683792/vaklit_bmjr0g.png",
	];

	let imageIndex = 0;
	if (index !== undefined && index !== null) {
		const factor = Math.floor(index / images.length);

		imageIndex = index - images.length * factor;
	} else {
		imageIndex = Math.round(Math.random() * (images.length - 1));
	}
	return images[imageIndex];
};

const TranslatedSentenceCard: React.FC<Props> = ({
	cardRef,
	originalSentence,
	translatedSentece,
	imgSource,
	index,
}) => {
	return (
		<div ref={cardRef} className={styles["translated-sentence__card"]}>
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
				<img src={getRandomCardImage(index)}></img>
			)}
		</div>
	);
};

export default TranslatedSentenceCard;
