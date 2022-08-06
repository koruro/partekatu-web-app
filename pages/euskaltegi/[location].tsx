import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import CustomHead from "../../components/CustomHead";
import {
  getEuskaltegiSiteHeadTitle,
  getEuskaltegiSiteMetaDesc,
} from "../../components/Euskaltegi/euskaltegiSiteMetadata";
import { getRandomFallbackLocationImage } from "../../components/Euskaltegi/getRandomFallbackLocationImage";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageBox from "../../components/Page/PageBox/PageBox";
import SiteEuskaltegisContainer from "../../containers/Euskaltegi/site-euskaltegis-container/SiteEuskaltegisContainer";
import { Article } from "../../models/Article";
import {
  Euskaltegi,
  getParsedLocationUrlName,
  Location,
} from "../../models/euskaltegi/Euskaltegi";
import {
  articleRepository,
  euskaltegiRepository,
} from "../../services/bootstrap";
import { EuskaltegiFoundCode } from "../../services/euskaltegi/EuskaltegiFoundCode";
import { getInLocationNearbyOrNearest } from "../../services/euskaltegi/getEuskaltegisOrNearby";

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
        title={getEuskaltegiSiteHeadTitle(location.name)}
        metaTitle={getEuskaltegiSiteHeadTitle(location.name)}
        imgUrl={location.imgUrl ?? getRandomFallbackLocationImage()}
        metaDesc={getEuskaltegiSiteMetaDesc(location.name)}
      />
      <PageBox>
        <NavBar />
        <SiteEuskaltegisContainer
          foundCode={EuskaltegiFoundCode.FOUND_IN_LOCATION}
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
  const filtered = locations.filter((location) => location.toIndex);

  const paths: {
    params: ParsedUrlQuery;
    locale?: string | undefined;
  }[] = filtered.map((location) => ({
    params: { location: getParsedLocationUrlName(location.name) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params?.location) throw new Error(`No location param found`);

  const location = params.location;

  if (typeof location !== "string") throw new Error(`No location param found`);

  const articleRecommendations = await articleRepository.getArticles({
    limit: 3,
  });

  // Get location data
  const locationData = await euskaltegiRepository.getLocationInfo(
    location.replace(/-/g, " ")
  );

  if (!locationData)
    throw Error(`No location data found for location ${location}`);

  // Fetch article and recommendations data
  const [euskaltegis] = await getInLocationNearbyOrNearest(
    euskaltegiRepository,
    locationData
  );

  return {
    props: {
      euskaltegis,
      location: locationData,
      articleRecommendations,
    },
  };
};
