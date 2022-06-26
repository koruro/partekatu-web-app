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
        <div>
          <StickyContainer>
            <MyMap euskaltegis={euskaltegis}></MyMap>
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
    </PageContainerBox>
  );
};

export default SiteEuskaltegisContainer;
