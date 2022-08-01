/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";
import StickyContainer from "../../../components/Article/SideContainer/StickyContainer";
import EuskaltegiCard from "../../../components/Euskaltegi/EuskaltegiCard/EuskaltegiCard";
import PageContainerBox from "../../../components/Page/PageContainerBox/PageContainerBox";
import {
  Euskaltegi,
  getFormatedName,
  Location,
} from "../../../models/euskaltegi/Euskaltegi";
import { capitalize } from "../../../utils/capitalize";
import EuskaltegisMap from "../EuskaltegisMap";
import styles from "./styles.module.css";

interface Props {
  euskaltegis: Euskaltegi[];
  location: Location;
}

const SiteEuskaltegisContainer: React.FC<Props> = ({
  euskaltegis,
  location,
}) => {
  const router = useRouter();
  return (
    <PageContainerBox breakLimit="xl">
      <div className={styles["euskaltegis-container"]}>
        <div className={styles["euskaltegis-container__body"]}>
          <div>
            <h1>🏫 Euskaltegis en {capitalize(location.name)}</h1>
            <div className={styles["euskaltegis-container__banner-img"]}>
              <img style={{ objectFit: "cover" }} src={location.imgUrl} />
            </div>
            <p>
              Estos son los euskaltegis que hemos encontrado en{" "}
              {capitalize(location.name)}. Echa un vistazo en el mapa justo
              debajo 😉.
            </p>
            <h3 style={{ padding: "0 1rem" }}>🗺️ ¡Encuéntralos en el mapa!</h3>
            <StickyContainer>
              <div style={{ height: "min(600px, 70vh)" }}>
                <EuskaltegisMap
                  euskaltegis={euskaltegis}
                  onMarkerClick={(euskaltegi) =>
                    router.push(`#${getFormatedName(euskaltegi.name)}`)
                  }
                />
              </div>
              <p
                style={{
                  color: "var(--text)",
                  textAlign: "left",
                }}
              >
                ¿No sabes qué <b>euskaltegi</b> elegir? Pásate por{" "}
                <a href="/euskaltegi/buscador">nuestra guía</a> para elegir un
                euskaltegi.
              </p>
            </StickyContainer>
          </div>
          <div
            style={{
              padding: "0 .7rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            className={styles["euskaltegis-container__list"]}
          >
            {euskaltegis
              .sort((e) => -+(e.isPromoted ?? false))
              .map((euskaltegi, index) => (
                <EuskaltegiCard key={index} euskaltegi={euskaltegi} />
              ))}
          </div>
        </div>
      </div>
    </PageContainerBox>
  );
};

export default SiteEuskaltegisContainer;
