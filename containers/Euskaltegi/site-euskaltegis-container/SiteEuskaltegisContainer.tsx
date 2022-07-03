import StickyContainer from "../../../components/Article/SideContainer/StickyContainer";
import EuskaltegiCard from "../../../components/Euskaltegi/EuskaltegiCard/EuskaltegiCard";
import PageContainerBox from "../../../components/Page/PageContainerBox/PageContainerBox";
import { Euskaltegi } from "../../../models/euskaltegi/Euskaltegi";
import MyMap from "../MyMap";
import styles from "./styles.module.css";

interface Props {
  euskaltegis: Euskaltegi[];
}

const SiteEuskaltegisContainer: React.FC<Props> = ({ euskaltegis }) => {
  return (
    <PageContainerBox breakLimit="xl">
      <div className={styles["euskaltegis-container"]}>
        <h1>Euskaltegis en Tolosa</h1>
        <div>
          <img
            style={{ maxWidth: "100%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bilbao_-_Guggenheim_46.jpg/640px-Bilbao_-_Guggenheim_46.jpg"
          />
        </div>
        <div className={styles["euskaltegis-container__body"]}>
          <div>
            <h3>¡Encuéntralos en el mapa!</h3>
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
