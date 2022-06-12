import React from "react";
import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageBox from "../../components/Page/PageBox/PageBox";
import ArticlesContainer from "../../containers/ArticlesSearch/ArticlesContainer";
import EuskaltegiSearchContainer from "../../containers/Euskaltegi/EuskaltegiSearchContainer";

const headTitle = "Todos los artículos de partekatu.com";
const metaDesc =
  "En Partekatu tenemos artículos de todo lo que puedas necesitar en torno al euskera ¡Simplemente busca lo que necesites y aprende!";

const EuskaltegiSearchPage = () => {
  return (
    <>
      <CustomHead title={headTitle} metaTitle={headTitle} metaDesc={metaDesc} />
      <PageBox className="home">
        <NavBar />
        <EuskaltegiSearchContainer />
        <Footer />
      </PageBox>
    </>
  );
};

export default EuskaltegiSearchPage;
