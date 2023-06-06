import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import PurchaseConditionsContainer from "../containers/PurchaseConditionsContainer";

const headTitle = "Privacidad - partekatu.com";
const metaTitle = "Información sobre la privacidad";

const PurchaseConditionsPage = () => {
  return (
    <>
      <CustomHead title={headTitle} metaTitle={metaTitle} noIndex={true} />
      <PageBox>
        <NavBar />
        <PurchaseConditionsContainer />
        <Footer />
      </PageBox>
    </>
  );
};

export default PurchaseConditionsPage;
