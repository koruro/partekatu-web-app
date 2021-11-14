import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import PrivacyPolicyContainer from "../containers/PrivacyPolicyContainer";

const headTitle = "Privacidad - partekatu.com";
const metaTitle = "Información sobre la privacidad";

const PrivacyPage = () => {
	return (
		<>
			<CustomHead title={headTitle} metaTitle={metaTitle} noIndex={true} />
			<PageBox>
				<NavBar />
				<PrivacyPolicyContainer />
				<Footer />
			</PageBox>
		</>
	);
};

export default PrivacyPage;
