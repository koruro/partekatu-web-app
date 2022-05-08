import { useRouter } from "next/router";
import React from "react";
import { SITE_URL } from "../../../utils/constants";
import {
	getFacebookShareLink,
	getTwitterShareLink,
	getWhatsappShareLink,
} from "../../../utils/getSocialShareLinks";
import { SocialType } from "../../Shared/SocialIcon";
import SentenceContainer from "../SentenceContainer";
import Poem from "./Poem";

interface Props {
	index: number;
}

const sharePathFactory =
	(poem: string, path: string) => (social: SocialType) => {
		if (social === "twitter") {
			const message = `Visita ${SITE_URL}${path}`;

			return getTwitterShareLink(message);
		}

		if (social === "facebook") {
			return getFacebookShareLink("Poemas en euskera", poem, SITE_URL);
		}

		return getWhatsappShareLink(poem);
	};

const PoemCard: React.FC<Props> = ({ index, children }) => {
	const { asPath } = useRouter();
	const poem = (children as any[])
		.map((c) => c?.props?.children?.join(" "))
		.filter((c) => c !== null)
		.join("\n");

	return (
		<SentenceContainer
			index={index}
			sharePathFactory={sharePathFactory(poem, asPath)}
		>
			<Poem>{children}</Poem>
		</SentenceContainer>
	);
};

export default PoemCard;
