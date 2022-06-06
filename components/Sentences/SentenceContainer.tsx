import styles from "./styles.module.css";
import ImageCardShareList from "./ShareList/ImageCardShareList";
import ImageCardTears from "./Tears/ImageCardTears";
import { SocialType } from "../Shared/SocialIcon";
import Image from "next/image";
import BlankCard from "../Shared/BlankCard/BlankCard";

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
    "https://res.cloudinary.com/koruro/image/upload/v1652643822/Card%20Image%20backgrounds/zumaia_nqumgq.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643822/Card%20Image%20backgrounds/zaldiak_sjvcmu.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/san_fermin_gqh03n.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/txantxangorria_sp2jxa.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/portua_okbz1v.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/kostaldea_yg9rp2.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/kontxa_npnb0w.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/mendia_kumg0g.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/karst_xlhodr.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/gasteizko_enparantza_wsubwi.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/euskal-festa_hjgyi6.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/erliebea_ajiuei.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/bilbo-gaua_b3pdks.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643821/Card%20Image%20backgrounds/donostia_xfp2ad.png",
    "https://res.cloudinary.com/koruro/image/upload/v1652643820/Card%20Image%20backgrounds/bardenak_s9mjcx.png",
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
    <BlankCard rounded="l" className={styles["sentence-card__container"]}>
      {sharePathFactory && (
        <ImageCardShareList sharePathFactory={sharePathFactory} />
      )}
      {_showTears && <ImageCardTears />}
      <div className={styles["image-card__children"]}>{children}</div>
      <div className={styles["image-card__image"]}>
        <img
          src={getRandomCardImage(index)}
          decoding="async"
          loading="lazy"
        ></img>
      </div>
    </BlankCard>
  );
};

export default SentenceContainer;
