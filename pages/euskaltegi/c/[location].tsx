import { GetServerSideProps } from "next";
import CustomHead from "../../../components/CustomHead";
import { getRandomFallbackLocationImage } from "../../../components/Euskaltegi/getRandomFallbackLocationImage";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import PageBox from "../../../components/Page/PageBox/PageBox";
import LocationNotFoundContainer from "../../../containers/Euskaltegi/LocationNotFoundContainer/LocationNotFoundContainer";
import SiteEuskaltegisContainer from "../../../containers/Euskaltegi/site-euskaltegis-container/SiteEuskaltegisContainer";
import { Article } from "../../../models/Article";
import { Euskaltegi, Location } from "../../../models/euskaltegi/Euskaltegi";
import {
  articleRepository,
  euskaltegiRepository,
} from "../../../services/bootstrap";
import { EuskaltegiFoundCode } from "../../../services/euskaltegi/EuskaltegiFoundCode";
import {
  getInLocationNearbyOrNearest,
  getNearbyOrNearest,
} from "../../../services/euskaltegi/getEuskaltegisOrNearby";
import { getExternalLocationInfo } from "../../../services/euskaltegi/getExternalLocationInfo";

const EuskaltegiFallbackLocationPlacePage: React.FC<{
  searchedLocation: string;
  foundCode: EuskaltegiFoundCode;
  location?: Location;
  euskaltegis?: Euskaltegi[];
  articleRecommendations: Article[];
}> = ({
  euskaltegis,
  location,
  articleRecommendations,
  searchedLocation,
  foundCode,
}) => {
  return (
    <>
      {location ? (
        <CustomHead
          title={`Los mejores euskaltegis en ${location.name}`}
          metaTitle={`Los mejores euskaltegis en ${location.name}`}
          metaDesc={`¿Quieres aprender euskera? Descubre los euskaltegis más recomendados en ${location.name} mediante nuestro mapa con valoraciones, datos de contacto y más.`}
          imgUrl={location.imgUrl ?? getRandomFallbackLocationImage()}
          noIndex
        />
      ) : (
        <CustomHead title={`Busca los mejores euskaltegis`} noIndex />
      )}
      <PageBox>
        <NavBar />
        {location && euskaltegis ? (
          <SiteEuskaltegisContainer
            foundCode={foundCode}
            euskaltegis={euskaltegis}
            location={location}
            articleRecommendations={articleRecommendations}
          />
        ) : (
          <LocationNotFoundContainer searchedLocation={searchedLocation} />
        )}
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

  const searchResult = await _getEuskaltegisAndLocation(location);
  if (!searchResult)
    return { props: { searchedLocation: location, articleRecommendations } };

  const [locationInfo, euskaltegis, foundCode] = searchResult;

  return {
    props: {
      foundCode,
      searchedLocation: location,
      location: locationInfo,
      euskaltegis,
      articleRecommendations,
    },
  };
};

async function _getEuskaltegisAndLocation(
  locationName: string
): Promise<[Location, Euskaltegi[], EuskaltegiFoundCode] | undefined> {
  // Try to get location info from own db
  const locationData = await euskaltegiRepository.getLocationInfo(locationName);

  // If no locationData is found, get it from Google Places API and find nearby euskaltegis
  if (!locationData) return _getExternalInfoAndEuskaltegis(locationName);

  // If locationData is found. The location is indexed in our DB. Therefore some euskaltegis must be found
  const [euskaltegis, foundCode] = await getInLocationNearbyOrNearest(
    euskaltegiRepository,
    locationData
  );
  return [locationData, euskaltegis, foundCode];
}

async function _getExternalInfoAndEuskaltegis(
  locationName: string
): Promise<[Location, Euskaltegi[], EuskaltegiFoundCode] | undefined> {
  if (!process.env.PRIVATE_GOOGLE_MAPS_API_KEY)
    throw new Error(`No places API Key provided`);

  const locationInfo = await getExternalLocationInfo(
    locationName,
    process.env.PRIVATE_GOOGLE_MAPS_API_KEY
  );

  if (!locationInfo) return;

  const [euskaltegis, foundCode] = await getNearbyOrNearest(
    euskaltegiRepository,
    locationInfo.coordinates
  );

  return [locationInfo, euskaltegis, foundCode];
}
