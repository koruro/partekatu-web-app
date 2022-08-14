import classNames from "classnames";
import {
  Euskaltegi,
  getParsedEuskaltegiUrlName,
} from "../../../models/euskaltegi/Euskaltegi";
import { capitalize } from "../../../utils/capitalize";
import { TaggedBlankCard } from "../../Shared/BlankCard/BlankCard";
import { HiMail } from "react-icons/hi";
import styles from "./styles.module.css";
import { BiPhone, BiWorld } from "react-icons/bi";
import { FaPhone, FaMapMarker } from "react-icons/fa";
import RankStars from "../RankStars";
import EuskaltegiAccess from "../EuskaltegiAccess/EuskaltegiAccess";
import { getEuskaltegiImgUrl } from "../getEuskaltegiImgUrl";
import { PropsWithChildren } from "react";

const CardInfoRow: React.FC<PropsWithChildren> = ({ children }) => {
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

const getEuskaltegiFullAddress = (euskaltegi: Euskaltegi) =>
  [euskaltegi.address, euskaltegi.postalCode, capitalize(euskaltegi.city)]
    .filter((s) => s !== "" || s !== undefined)
    .join(", ");

interface Props {
  euskaltegi: Euskaltegi;
}

const EuskaltegiCard: React.FC<Props> = ({ euskaltegi }) => {
  return (
    <TaggedBlankCard rounded="m">
      <div
        id={`${getParsedEuskaltegiUrlName(euskaltegi.name)}`}
        className={classNames(styles["euskaltegi-card"], {
          [`${styles["euskaltegi-card--is_promoted"]}`]: euskaltegi.isPromoted,
        })}
      >
        <h3>{euskaltegi.name}</h3>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            margin: ".4rem 0",
            marginBottom: "0.7rem",
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
          {euskaltegi.rating.score > 0 && (
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
          )}
        </div>
        <div className={styles["euskaltegi-card__body"]}>
          <div className={styles["euskaltegi-card__image"]}>
            <img
              title={"title"}
              alt={"altTitle"}
              src={getEuskaltegiImgUrl(euskaltegi)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: ".6rem",
            }}
          >
            <CardInfoRow>
              <FaMapMarker color="var(--primary)" />
              <span>{getEuskaltegiFullAddress(euskaltegi)}</span>
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
            marginTop: "2rem",
          }}
        >
          <a
            className="button-padding-1 elevate-1 hoverable-elevate"
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
            rel="noopener noreferrer nofollow"
            href={euskaltegi.websiteUrl}
          >
            <BiWorld /> Visitar
          </a>
          <a
            className="button-padding-1 elevate-1 hoverable-elevate"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".5em",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "var(--rounded-l)",
              background: "var(--vocabulary-gradient)",
            }}
            href={`tel:+34${euskaltegi.phone}`}
          >
            <BiPhone /> Llamar
          </a>
        </div>
      </div>
    </TaggedBlankCard>
  );
};

export default EuskaltegiCard;
