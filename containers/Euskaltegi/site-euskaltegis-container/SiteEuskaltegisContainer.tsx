/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";
import StickyContainer from "../../../components/Article/SideContainer/StickyContainer";
import EuskaltegiBottomSnippet from "../../../components/Euskaltegi/EuskaltegiBottomSnippet/EuskaltegiBottomSnippet";
import EuskaltegiCard from "../../../components/Euskaltegi/EuskaltegiCard/EuskaltegiCard";
import { getRandomFallbackLocationImage } from "../../../components/Euskaltegi/getRandomFallbackLocationImage";
import PageContainerBox from "../../../components/Page/PageContainerBox/PageContainerBox";
import { Article } from "../../../models/Article";
import {
  Euskaltegi,
  getFormatedName,
  Location,
} from "../../../models/euskaltegi/Euskaltegi";
import { EuskaltegiFoundCode } from "../../../services/euskaltegi/EuskaltegiFoundCode";
import { capitalize } from "../../../utils/capitalize";
import EuskaltegisMap from "../EuskaltegisMap";
import styles from "./styles.module.css";

interface Props {
  euskaltegis: Euskaltegi[];
  foundCode: EuskaltegiFoundCode;
  articleRecommendations: Article[];
  location: Location;
}

const getSubtitleByFoundCode = (
  code: EuskaltegiFoundCode,
  location: Location
) => {
  if (code === EuskaltegiFoundCode.FOUND_IN_LOCATION)
    return (
      <>
        Estos son los euskaltegis que hemos encontrado en{" "}
        {capitalize(location.name)}. Echa un vistazo en el mapa justo debajo 😉.
      </>
    );
  return (
    <>
      No hemos encontrado ningún euskaltegi cerca de {capitalize(location.name)}
      . Así que te mostramos los euskaltegis más cercanos que hemos podido
      encontrar 😉.
    </>
  );
};

const SiteEuskaltegisContainer: React.FC<Props> = ({
  euskaltegis,
  location,
  articleRecommendations,
  foundCode,
}) => {
  const router = useRouter();
  return (
    <PageContainerBox breakLimit="xl">
      <div className={styles["euskaltegis-container"]}>
        <div className={styles["euskaltegis-container__body"]}>
          <div>
            <h1>🏫 Euskaltegis en {capitalize(location.name)}</h1>
            <div className={styles["euskaltegis-container__banner-img"]}>
              <img
                style={{ objectFit: "cover" }}
                src={location.imgUrl ?? getRandomFallbackLocationImage()}
                alt={`Encuentra euskaltegis en ${location.name}`}
                title={`Euskaltegis en ${location.name}`}
              />
            </div>
            <p className={styles["euskaltegis-container__sub-title"]}>
              {getSubtitleByFoundCode(foundCode, location)}
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
        <EuskaltegiBottomSnippet
          articleRecommendations={articleRecommendations}
        />
      </div>
    </PageContainerBox>
  );
};

export default SiteEuskaltegisContainer;
