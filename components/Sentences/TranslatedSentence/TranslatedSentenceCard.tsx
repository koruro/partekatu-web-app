import React from "react";
import { SITE_URL } from "../../../utils/constants";
import {
	getTwitterShareLink,
	getFacebookShareLink,
	getWhatsappShareLink,
} from "../../../utils/getSocialShareLinks";
import { SocialType } from "../../Shared/SocialIcon";
import SentenceContainer from "../SentenceContainer";
import TranslatedSentence from "./TranslatedSentence";

interface Props {
	index: number;
}

const sharePathFactory = (sentence: string) => (social: SocialType) => {
	if (social === "twitter") {
		const message = `${sentence}\n\nDesde ${SITE_URL}`;

		return getTwitterShareLink(message);
	}

	if (social === "facebook") {
		return getFacebookShareLink("Frases en euskera", sentence, SITE_URL);
	}

	return getWhatsappShareLink(sentence);
};

const TranslatedSentenceCard: React.FC<Props> = ({ index, children }) => {
	const originalSentence = (children as any[]).find((c) => c.type === "p")
		?.props?.children;

	return (
		<SentenceContainer
			sharePathFactory={sharePathFactory(originalSentence)}
			index={index}
		>
			<TranslatedSentence>{children}</TranslatedSentence>
		</SentenceContainer>
	);
};

export default TranslatedSentenceCard;
