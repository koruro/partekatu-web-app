import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageBox from "../../components/Page/PageBox/PageBox";
import SiteEuskaltegisContainer from "../../containers/Euskaltegi/site-euskaltegis-container/SiteEuskaltegisContainer";
import { Euskaltegi, Location } from "../../models/euskaltegi/Euskaltegi";
import { euskaltegiRepository } from "../../services/bootstrap";

interface Props {
  euskaltegis: Euskaltegi[];
  location: Location;
}

const EuskaltegiPlacePage: React.FC<Props> = ({ euskaltegis, location }) => {
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

  // Get location data
  const locationData = await euskaltegiRepository.getLocationInfo(location);

  if (!locationData)
    throw Error(`No location data found for location ${location}`);

  try {
    // Fetch article and recommendations data
    const euskaltegis = await euskaltegiRepository.getEuskaltegisInLocation(
      location
    );

    return {
      props: {
        euskaltegis,
        location: locationData,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};
