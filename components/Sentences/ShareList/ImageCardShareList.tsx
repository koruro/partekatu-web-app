import ShareButton from "../../Shared/ShareButton/ShareButton";
import SocialIcon, { SocialType } from "../../Shared/SocialIcon";
import styles from "./styles.module.css";

interface Props {
  sharePathFactory: (social: SocialType) => string;
}

const ImageCardShareList: React.FC<Props> = ({ sharePathFactory }) => {
  return (
    <div className={styles["image-card-sentence-list"]}>
      <ShareButton getPath={() => sharePathFactory("whatsapp")}>
        <SocialIcon social="whatsapp"></SocialIcon>
      </ShareButton>
      <ShareButton getPath={() => sharePathFactory("twitter")}>
        <SocialIcon social="twitter"></SocialIcon>
      </ShareButton>
      <ShareButton getPath={() => sharePathFactory("facebook")}>
        <SocialIcon social="facebook"></SocialIcon>
      </ShareButton>
    </div>
  );
};

export default ImageCardShareList;
