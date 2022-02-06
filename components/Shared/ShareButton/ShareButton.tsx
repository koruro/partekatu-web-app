import { FaFacebookF, FaTwitter } from "react-icons/fa";
import {
	getFacebookShareLink,
	getTwitterShareLink,
} from "../../../utils/getSocialShareLinks";

export type SocialType = "facebook" | "twitter";

interface Props {
	social: SocialType;
	path: string;
	title?: string;
}

const ShareButton: React.FC<Props> = ({ path, social, title }) => {
	const getSocialButton = (social: SocialType) => {
		if (social === "facebook") {
			return <FaFacebookF fontSize={15} color="white" />;
		}
		if (social === "twitter") {
			return <FaTwitter fontSize={15} color="white" />;
		}
	};
	const getSocialLink = (social: SocialType) => {
		if (social === "facebook") {
			return getFacebookShareLink(path);
		}
		if (social === "twitter") {
			return getTwitterShareLink(path, title ?? "");
		}
	};

	return (
		<a
			className="hoverable-elevate"
			href={getSocialLink(social)}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="share with Facebook"
			style={{
				display: "inline-flex",
				backgroundColor: "var(--primary)",
				borderRadius: "100%",
				padding: "7px",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{getSocialButton(social)}
		</a>
	);
};

export default ShareButton;
