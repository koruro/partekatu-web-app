import { getWhatsappShareLink } from "../../utils/getSocialShareLinks";
import DownloadButton from "../Shared/ShareButton/DownloadButton";
import ShareButton from "../Shared/ShareButton/ShareButton";
import SocialIcon from "../Shared/SocialIcon";
import styles from "./styles.module.css";
import TranslatedSentenceCard from "./TranslatedSentenceCard";
import domtoimage from "dom-to-image";
import { useRef } from "react";
import { generateDownloadFromUrl } from "../../utils/download";

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
						const message = encodeURIComponent(
							`${originalSentence}\n\n${translatedSentece}`
						);
						return getWhatsappShareLink(message);
					}}
				>
					<SocialIcon social="whatsapp"></SocialIcon>
				</ShareButton>
				<DownloadButton
					onClick={() => {
						domtoimage
							.toPng(cardRef?.current as any, { style: { width: "100%" } })
							.then((dataUrl) =>
								generateDownloadFromUrl(dataUrl, "frase-euskera.png")
							);
					}}
				>
					<SocialIcon social="download"></SocialIcon>
				</DownloadButton>
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
