import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import LegalAdvisorContainer from "../containers/LegalAdvisorContainer";

const headTitle = "Aviso Legal - partekatu.com";
const metaTitle = "Información sobre aviso legal";

const LegalPage = () => {
	return (
		<>
			<CustomHead title={headTitle} metaTitle={metaTitle} noIndex={true} />
			<PageBox>
				<NavBar />
				<LegalAdvisorContainer />
				<Footer />
			</PageBox>
		</>
	);
};

export default LegalPage;
