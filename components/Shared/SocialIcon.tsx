import { FaDownload, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

export type SocialType = "facebook" | "twitter" | "whatsapp" | "download";

interface Props {
	social: SocialType;
}

const SocialIcon: React.FC<Props> = ({ social }) => {
	const getSocialButton = (social: SocialType) => {
		if (social === "facebook") {
			return <FaFacebookF fontSize={15} color="white" />;
		}
		if (social === "twitter") {
			return <FaTwitter fontSize={15} color="white" />;
		}
		if (social === "whatsapp") {
			return <FaWhatsapp fontSize={20} color="white" />;
		}

		if (social === "download") {
			return <FaDownload size={17} color="white" />;
		}
	};

	return (
		<div
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
		</div>
	);
};

export default SocialIcon;
