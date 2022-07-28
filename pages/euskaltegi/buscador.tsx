import { GetStaticProps } from "next";
import React from "react";
import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageBox from "../../components/Page/PageBox/PageBox";
import ArticlesContainer from "../../containers/ArticlesSearch/ArticlesContainer";
import EuskaltegiSearchContainer from "../../containers/Euskaltegi/search-container/EuskaltegiSearchContainer";
import { Location } from "../../models/euskaltegi/Euskaltegi";
import { euskaltegiRepository } from "../../services/bootstrap";

const headTitle = "Todos los artículos de partekatu.com";
const metaDesc =
  "En Partekatu tenemos artículos de todo lo que puedas necesitar en torno al euskera ¡Simplemente busca lo que necesites y aprende!";

const EuskaltegiSearchPage: React.FC<{ locations: Location[] }> = ({
  locations,
}) => {
  return (
    <>
      <CustomHead title={headTitle} metaTitle={headTitle} metaDesc={metaDesc} />
      <PageBox>
        <NavBar />
        <EuskaltegiSearchContainer initialLocations={locations} />
        <Footer />
      </PageBox>
    </>
  );
};

export default EuskaltegiSearchPage;

export const getStaticProps: GetStaticProps = async () => {
  const locations = await euskaltegiRepository.getAllLocations();

  return { props: { locations } };
};
