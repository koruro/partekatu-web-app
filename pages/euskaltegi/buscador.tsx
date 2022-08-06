import { GetStaticProps } from "next";
import React from "react";
import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageBox from "../../components/Page/PageBox/PageBox";
import EuskaltegiSearchContainer from "../../containers/Euskaltegi/search-container/EuskaltegiSearchContainer";
import { Euskaltegi } from "../../models/euskaltegi/Euskaltegi";
import { euskaltegiRepository } from "../../services/bootstrap";

const headTitle = "Buscador de Euskaltegis";
const metaDesc =
  "Una de las mejores formas de aprender euskera es los apuntándote a un euskaltegi o academia de euskera ¡Descubre cuáles tienes cerca con nuestro buscador!";

const EuskaltegiSearchPage: React.FC<{
  euskaltegis: Euskaltegi[];
}> = ({ euskaltegis }) => {
  return (
    <>
      <CustomHead title={headTitle} metaTitle={headTitle} metaDesc={metaDesc} />
      <PageBox className="euskaltegi-home">
        <NavBar />
        <EuskaltegiSearchContainer euskaltegis={euskaltegis} />
        <Footer />
      </PageBox>
    </>
  );
};

export default EuskaltegiSearchPage;

export const getStaticProps: GetStaticProps = async () => {
  const euskaltegis = await euskaltegiRepository.getAllEuskaltegis();

  return { props: { euskaltegis } };
};
