import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageBox from "../../components/Page/PageBox/PageBox";
import SiteEuskaltegisContainer from "../../containers/Euskaltegi/site-euskaltegis-container/SiteEuskaltegisContainer";
import { Euskaltegi } from "../../models/euskaltegi/Euskaltegi";
import { euskaltegiRepository } from "../../services/bootstrap";

interface Props {
  euskaltegis: Euskaltegi[];
}

const EuskaltegiPlacePage: React.FC<Props> = ({ euskaltegis }) => {
  return (
    <>
      <CustomHead title={""} metaTitle={"headTitle"} metaDesc={"metaDesc"} />
      <PageBox>
        <NavBar />
        <SiteEuskaltegisContainer euskaltegis={euskaltegis} />
        <Footer />
      </PageBox>
    </>
  );
};

export default EuskaltegiPlacePage;

// Get all slug paths
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await euskaltegiRepository.getAllPlaces();

  const paths: {
    params: ParsedUrlQuery;
    locale?: string | undefined;
  }[] = slugs.map((slug) => ({
    params: { place: slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  if (!params?.place) throw new Error(`No place param found`);

  const place = params.place;

  if (typeof place !== "string") throw new Error(`No place param found`);

  try {
    // Fetch article and recommendations data
    const euskaltegis = await euskaltegiRepository.findManyByPlace(place);

    return {
      props: {
        euskaltegis,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};
