import { GetServerSideProps } from "next";
import CustomHead from "../../../components/CustomHead";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import PageBox from "../../../components/Page/PageBox/PageBox";
import SiteEuskaltegisContainer from "../../../containers/Euskaltegi/site-euskaltegis-container/SiteEuskaltegisContainer";
import { Euskaltegi, Location } from "../../../models/euskaltegi/Euskaltegi";
import { euskaltegiRepository } from "../../../services/bootstrap";

const EuskaltegiFallbackLocationPlacePage: React.FC<{
  location: Location;
  euskaltegis: Euskaltegi[];
}> = ({ euskaltegis, location }) => {
  return (
    <>
      <CustomHead title={""} metaTitle={"headTitle"} metaDesc={"metaDesc"} />
      <PageBox>
        <NavBar />
        <SiteEuskaltegisContainer
          euskaltegis={euskaltegis}
          location={location}
        />
        <Footer />
      </PageBox>
    </>
  );
};

export default EuskaltegiFallbackLocationPlacePage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.location) throw new Error(`No location param found`);

  const location = params.location;

  if (typeof location !== "string") throw new Error(`No location param found`);

  const locationInfo = await euskaltegiRepository.getExternalLocationInfo(
    location
  );

  if (!locationInfo) throw new Error(`No location info found`);

  console.log(locationInfo);

  const euskaltegis = await euskaltegiRepository.getNearbyEuskaltegis(
    locationInfo.coordinates
  );

  return { props: { location: locationInfo, euskaltegis } };
};
