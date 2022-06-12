import EuskaltegiCard from "../../components/Euskaltegi/EuskaltegiCard/EuskaltegiCard";
import PageContainerBox from "../../components/Page/PageContainerBox/PageContainerBox";
import { Euskaltegi } from "../../models/euskaltegi/Euskaltegi";

interface Props {
  euskaltegis: Euskaltegi[];
}

const SiteEuskaltegisContainer: React.FC<Props> = ({ euskaltegis }) => {
  return (
    <PageContainerBox breakLimit="xl">
      <div
        style={{
          padding: ".7rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          rowGap: "1rem",
        }}
      >
        {euskaltegis.map((euskaltegi, index) => (
          <EuskaltegiCard key={index} euskaltegi={euskaltegi} />
        ))}
      </div>
    </PageContainerBox>
  );
};

export default SiteEuskaltegisContainer;
