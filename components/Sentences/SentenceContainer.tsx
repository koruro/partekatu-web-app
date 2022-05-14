import styles from "./styles.module.css";
import ImageCardShareList from "./ShareList/ImageCardShareList";
import ImageCardTears from "./Tears/ImageCardTears";
import { SocialType } from "../Shared/SocialIcon";

interface Props {
  index: number;
  showTears?: boolean;
  sharePathFactory?: (social: SocialType) => string;
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

const SentenceContainer: React.FC<Props> = ({
  children,
  index,
  showTears,
  sharePathFactory,
}) => {
  const _showTears = showTears === undefined ? true : showTears;
  return (
    <div className={styles["image-card__container"]}>
      {sharePathFactory && (
        <ImageCardShareList sharePathFactory={sharePathFactory} />
      )}
      {_showTears && <ImageCardTears />}
      <div className={styles["image-card__children"]}>{children}</div>
      <img src={getRandomCardImage(index)}></img>
    </div>
  );
};

export default SentenceContainer;
