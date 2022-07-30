import classNames from "classnames";
import {
  Euskaltegi,
  getFormatedName,
} from "../../../models/euskaltegi/Euskaltegi";
import { capitalize } from "../../../utils/capitalize";
import { TaggedBlankCard } from "../../Shared/BlankCard/BlankCard";
import { HiMail } from "react-icons/hi";
import styles from "./styles.module.css";
import { BiWorld } from "react-icons/bi";
import { FaPhone, FaMapMarker, FaMapPin } from "react-icons/fa";
import RankStars from "../RankStars";
import EuskaltegiAccess from "../EuskaltegiAccess/EuskaltegiAccess";

const CardInfoRow: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "16px 1fr",
        gap: ".8rem",
        alignItems: "center",
        fontSize: "min(6vw, 1.1rem)",
        color: "var(--text-subtle)",
      }}
    >
      {children}
    </div>
  );
};

interface Props {
  euskaltegi: Euskaltegi;
}

const EuskaltegiCard: React.FC<Props> = ({ euskaltegi }) => {
  return (
    <TaggedBlankCard rounded="m">
      <div
        className={classNames(styles["euskaltegi-card"], {
          [`${styles["euskaltegi-card--is_promoted"]}`]: euskaltegi.isPromoted,
        })}
      >
        <a
          href={`#${getFormatedName(euskaltegi.name)}`}
          id={`${getFormatedName(euskaltegi.name)}`}
        ></a>
        <h3>{euskaltegi.name}</h3>
        <span
          style={{
            marginTop: ".4rem",
            color: "var(--text-subtle)",
          }}
        >
          {euskaltegi.net}
        </span>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            margin: ".4rem 0",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: ".6rem",
              color: "var(--text-subtle)",
            }}
          >
            <EuskaltegiAccess access={euskaltegi.access} />
          </div>
          <div
            style={{
              display: "flex",
              gap: ".4rem",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: "#FFD600",
              }}
            >
              {euskaltegi.rating.score}
            </span>
            <RankStars stars={euskaltegi.rating.score} />
          </div>
        </div>
        <div
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "min(20vw, 113px) 1fr",
          //   columnGap: "1.4rem",
          // }}
          className={styles["euskaltegi-card__body"]}
        >
          <div className={styles["euskaltegi-card__image"]}>
            <img title={"title"} alt={"altTitle"} src={euskaltegi.imgUrl} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem 0",
              gap: ".6rem",
            }}
          >
            <CardInfoRow>
              <FaMapMarker color="var(--primary)" />
              <span>
                {euskaltegi.address}, {capitalize(euskaltegi.city)}
              </span>
            </CardInfoRow>

            <CardInfoRow>
              <FaMapPin color="var(--primary)" />
              <span>{euskaltegi.postalCode}</span>
            </CardInfoRow>
            <CardInfoRow>
              <FaPhone color="var(--primary)" />
              <span>{euskaltegi.phone}</span>
            </CardInfoRow>
            <CardInfoRow>
              <HiMail color="var(--primary)" />
              <span>{euskaltegi.mailContact}</span>
            </CardInfoRow>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            margin: "auto",
            gap: "1rem",
            marginTop: "1rem",
          }}
          className="hoverable-elevate"
        >
          <a
            className="button-padding-1 elevate-1"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".5em",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "var(--rounded-l)",
              background: "var(--gramar-gradient)",
            }}
            target="__blank"
            href={euskaltegi.websiteUrl}
          >
            <BiWorld /> Visitar
          </a>
        </div>
      </div>
    </TaggedBlankCard>
  );
};

export default EuskaltegiCard;
