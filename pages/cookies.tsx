import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import CookiePolicyContainer from "../containers/CookiePolicyContainer";

const headTitle = "Política de Cookies | partekatu.com";
const metaTitle = "Información sobre la política de cookies";

const LegalPage = () => {
	return (
		<>
			<CustomHead title={headTitle} metaTitle={metaTitle} noIndex={true} />
			<PageBox>
				<NavBar />
				<CookiePolicyContainer />
				<Footer />
			</PageBox>
		</>
	);
};

export default LegalPage;
