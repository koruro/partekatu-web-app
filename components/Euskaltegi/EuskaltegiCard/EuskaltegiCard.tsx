import classNames from "classnames";
import Image from "next/image";
import { Euskaltegi } from "../../../models/euskaltegi/Euskaltegi";
import { capitalize } from "../../../utils/capitalize";
import { TaggedBlankCard } from "../../Shared/BlankCard/BlankCard";
import { HiMail } from "react-icons/hi";
import TagBox from "../../Shared/TagBox/TagBox";
import styles from "./styles.module.css";
import { BiWorld } from "react-icons/bi";

interface Props {
  euskaltegi: Euskaltegi;
}

const EuskaltegiCard: React.FC<Props> = ({ euskaltegi }) => {
  return (
    <TaggedBlankCard>
      <div className={classNames(styles["euskaltegi-card"])}>
        <div className={styles["euskaltegi-card__image"]}>
          <img title={"title"} alt={"altTitle"} src={euskaltegi.imgUrl} />
        </div>
        <h3>{euskaltegi.name}</h3>
        <div style={{ padding: "0 1rem" }}>
          <span>{euskaltegi.net}</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              {euskaltegi.address}, {capitalize(euskaltegi.city)},{" "}
              {capitalize(euskaltegi.province)}
            </span>
            <span>{euskaltegi.phone}</span>
            <div
              style={{
                display: "flex",
                margin: "auto",
                gap: "1rem",
                marginTop: "1rem",
              }}
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
                  background: "#ff514f",
                }}
                href={`mailto:${euskaltegi.mailContact}`}
              >
                <HiMail /> Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </TaggedBlankCard>
  );
};

export default EuskaltegiCard;
