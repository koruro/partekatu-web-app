import styles from "./styles.module.css";
import ImageCardShareList from "./ShareList/ImageCardShareList";
import ImageCardTears from "./Tears/ImageCardTears";
import { SocialType } from "../Shared/SocialIcon";
import BlankCard from "../Shared/BlankCard/BlankCard";
import { PropsWithChildren } from "react";
import classNames from "classnames";

interface Props {
  index: number;
  showTears?: boolean;
  sharePathFactory?: (social: SocialType) => string;
  imageSize?: "l" | "m";
}
const getRandomCardImage = (index?: number) => {
  const images = [
    "/basque-backgrounds/gzzte_c0m8bh.png",
    "/basque-backgrounds/casitas_ksckpo.png",
    "/basque-backgrounds/donos_tsavqa.png",
    "/basque-backgrounds/pampl_mwl8fq.png",
    "/basque-backgrounds/mar_uxmccc.png",
    "/basque-backgrounds/peine_aulezj.png",
    "/basque-backgrounds/guggen_efvi01.png",
    "/basque-backgrounds/vaklit_bmjr0g.png",
    "/basque-backgrounds/zumaia_nqumgq.png",
    "/basque-backgrounds/zaldiak_sjvcmu.png",
    "/basque-backgrounds/san_fermin_gqh03n.png",
    "/basque-backgrounds/txantxangorria_sp2jxa.png",
    "/basque-backgrounds/portua_okbz1v.png",
    "/basque-backgrounds/kostaldea_yg9rp2.png",
    "/basque-backgrounds/kontxa_npnb0w.png",
    "/basque-backgrounds/mendia_kumg0g.png",
    "/basque-backgrounds/karst_xlhodr.png",
    "/basque-backgrounds/gasteizko_enparantza_wsubwi.png",
    "/basque-backgrounds/euskal-festa_hjgyi6.png",
    "/basque-backgrounds/erliebea_ajiuei.png",
    "/basque-backgrounds/bilbo-gaua_b3pdks.png",
    "/basque-backgrounds/donostia_xfp2ad.png",
    "/basque-backgrounds/bardenak_s9mjcx.png",
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

const SentenceContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  index,
  showTears,
  sharePathFactory,
  imageSize = "l",
}) => {
  const _showTears = showTears === undefined ? true : showTears;
  return (
    <BlankCard
      rounded="l"
      className={classNames(styles["sentence-card__container"], {
        [`${styles["sentence-card__container--medium-image"]}`]:
          imageSize === "m",
      })}
    >
      {sharePathFactory && (
        <ImageCardShareList sharePathFactory={sharePathFactory} />
      )}
      {_showTears && <ImageCardTears />}
      <div className={styles["image-card__children"]}>{children}</div>
      <div className={styles["image-card__image"]}>
        <img
          src={getRandomCardImage(index)}
          alt=""
          decoding="async"
          loading="lazy"
        ></img>
      </div>
    </BlankCard>
  );
};

export default SentenceContainer;
