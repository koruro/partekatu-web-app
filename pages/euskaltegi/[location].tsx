import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import CustomHead from "../../components/CustomHead";
import { getRandomFallbackLocationImage } from "../../components/Euskaltegi/getRandomFallbackLocationImage";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageBox from "../../components/Page/PageBox/PageBox";
import SiteEuskaltegisContainer from "../../containers/Euskaltegi/site-euskaltegis-container/SiteEuskaltegisContainer";
import { Article } from "../../models/Article";
import { Euskaltegi, Location } from "../../models/euskaltegi/Euskaltegi";
import {
  articleRepository,
  euskaltegiRepository,
} from "../../services/bootstrap";
import { getNearbyOrNearest } from "../../services/euskaltegi/getEuskaltegisOrNearby";

interface Props {
  euskaltegis: Euskaltegi[];
  location: Location;
  articleRecommendations: Article[];
}

const EuskaltegiPlacePage: React.FC<Props> = ({
  euskaltegis,
  location,
  articleRecommendations,
}) => {
  return (
    <>
      <CustomHead
        title={`Los mejores euskaltegis en ${location.name}`}
        metaTitle={`Los mejores euskaltegis en ${location.name}`}
        imgUrl={location.imgUrl ?? getRandomFallbackLocationImage()}
        metaDesc={`¿Quieres aprender euskera? Descubre los euskaltegis más recomendados en ${location.name} mediante nuestro mapa con valoraciones, datos de contacto y más.`}
      />
      <PageBox>
        <NavBar />
        <SiteEuskaltegisContainer
          articleRecommendations={articleRecommendations}
          euskaltegis={euskaltegis}
          location={location}
        />
        <Footer />
      </PageBox>
    </>
  );
};

export default EuskaltegiPlacePage;

// Get all slug paths
export const getStaticPaths: GetStaticPaths = async () => {
  const locations = await euskaltegiRepository.getAllLocations();

  const paths: {
    params: ParsedUrlQuery;
    locale?: string | undefined;
  }[] = locations.map((location) => ({
    params: { location: location.name.toLowerCase() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.location) throw new Error(`No location param found`);

  const location = params.location;

  if (typeof location !== "string") throw new Error(`No location param found`);

  const articleRecommendations = await articleRepository.getArticles({
    limit: 3,
  });

  // Get location data
  const locationData = await euskaltegiRepository.getLocationInfo(location);

  if (!locationData)
    throw Error(`No location data found for location ${location}`);

  // Fetch article and recommendations data
  const euskaltegis = await euskaltegiRepository.getEuskaltegisInLocation(
    location
  );

  // If there are no euskaltegis in this location, find nearby ones
  if (euskaltegis.length <= 0) {
    const nearbyEuskaltegis = await getNearbyOrNearest(
      euskaltegiRepository,
      locationData.coordinates
    );
    return {
      props: {
        euskaltegis: nearbyEuskaltegis,
        location: locationData,
        articleRecommendations,
      },
    };
  }

  return {
    props: {
      euskaltegis,
      location: locationData,
      articleRecommendations,
    },
  };
};
