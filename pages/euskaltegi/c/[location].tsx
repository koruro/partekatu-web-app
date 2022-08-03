import { GetServerSideProps } from "next";
import CustomHead from "../../../components/CustomHead";
import { getRandomFallbackLocationImage } from "../../../components/Euskaltegi/getRandomFallbackLocationImage";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import PageBox from "../../../components/Page/PageBox/PageBox";
import SiteEuskaltegisContainer from "../../../containers/Euskaltegi/site-euskaltegis-container/SiteEuskaltegisContainer";
import { Article } from "../../../models/Article";
import { Euskaltegi, Location } from "../../../models/euskaltegi/Euskaltegi";
import {
  articleRepository,
  euskaltegiRepository,
} from "../../../services/bootstrap";
import { getNearbyOrNearest } from "../../../services/euskaltegi/getEuskaltegisOrNearby";
import { getExternalLocationInfo } from "../../../services/euskaltegi/getExternalLocationInfo";

const EuskaltegiFallbackLocationPlacePage: React.FC<{
  location: Location;
  euskaltegis: Euskaltegi[];
  articleRecommendations: Article[];
}> = ({ euskaltegis, location, articleRecommendations }) => {
  return (
    <>
      <CustomHead
        title={`Los mejores euskaltegis en ${location.name}`}
        metaTitle={`Los mejores euskaltegis en ${location.name}`}
        metaDesc={`¿Quieres aprender euskera? Descubre los euskaltegis más recomendados en ${location.name} mediante nuestro mapa con valoraciones, datos de contacto y más.`}
        imgUrl={location.imgUrl ?? getRandomFallbackLocationImage()}
        noIndex
      />
      <PageBox>
        <NavBar />
        <SiteEuskaltegisContainer
          euskaltegis={euskaltegis}
          location={location}
          articleRecommendations={articleRecommendations}
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

  const articleRecommendations = await articleRepository.getArticles({
    limit: 3,
  });
  if (!process.env.PRIVATE_GOOGLE_MAPS_API_KEY)
    throw new Error(`No places API Key provided`);

  const locationInfo = await getExternalLocationInfo(
    location,
    process.env.PRIVATE_GOOGLE_MAPS_API_KEY
  );

  if (!locationInfo) throw new Error(`No location info found`);

  const euskaltegis = await getNearbyOrNearest(
    euskaltegiRepository,
    locationInfo.coordinates
  );

  return {
    props: { location: locationInfo, euskaltegis, articleRecommendations },
  };
};
