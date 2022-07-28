import StickyContainer from "../../../components/Article/SideContainer/StickyContainer";
import EuskaltegiCard from "../../../components/Euskaltegi/EuskaltegiCard/EuskaltegiCard";
import PageContainerBox from "../../../components/Page/PageContainerBox/PageContainerBox";
import { Euskaltegi, Location } from "../../../models/euskaltegi/Euskaltegi";
import { capitalize } from "../../../utils/capitalize";
import MyMap from "../MyMap";
import styles from "./styles.module.css";

interface Props {
  euskaltegis: Euskaltegi[];
  location: Location;
}

const SiteEuskaltegisContainer: React.FC<Props> = ({
  euskaltegis,
  location,
}) => {
  return (
    <PageContainerBox breakLimit="xl">
      <div className={styles["euskaltegis-container"]}>
        <h1>🏫 Euskaltegis en {capitalize(location.name)}</h1>
        <div className={styles["euskaltegis-container__banner-img"]}>
          <img
            style={{ maxWidth: "100%", objectFit: "cover" }}
            src={location.imgUrl}
          />
        </div>
        <p>
          Estos son los euskaltegis que hemos encontrado en{" "}
          {capitalize(location.name)}. Echa un vistazo en el mapa justo debajo
          😉.
        </p>
        <div className={styles["euskaltegis-container__body"]}>
          <div>
            <h3 style={{ padding: "0 1rem" }}>🗺️ ¡Encuéntralos en el mapa!</h3>
            <StickyContainer>
              <div style={{ height: "min(600px, 70vh)", marginBottom: "2rem" }}>
                <MyMap euskaltegis={euskaltegis}></MyMap>
              </div>
            </StickyContainer>
          </div>
          <div
            style={{
              padding: "0 .7rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              rowGap: "1rem",
            }}
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
