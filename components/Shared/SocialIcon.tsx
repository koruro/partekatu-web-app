import { FaDownload, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

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
      return <ImWhatsapp fontSize={15} color="white" />;
    }

    if (social === "download") {
      return <FaDownload size={15} color="white" />;
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
