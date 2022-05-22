import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import AboutContainer from "../containers/AboutContainer";

const headTitle = "sobre partekatu.com";
const metaTitle = "sobre partekatu.com";
const metaDesc =
  "¿Quieres saber quiénes estamos detrás de partekatu.com y cuál es nuestro objetivo? ¡Pues entra y te lo contaremos!";

const AboutPage = () => {
  return (
    <>
      <CustomHead title={headTitle} metaTitle={metaTitle} metaDesc={metaDesc} />
      <PageBox>
        <NavBar />
        <AboutContainer />
        <Footer />
      </PageBox>
    </>
  );
};

export default AboutPage;
