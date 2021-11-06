import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import AboutContainer from "../containers/AboutContainer";

const headTitle = "Sobre Nosotros | Koruro";
const metaTitle = "Información sobre nosotros. Quiénes somos.";
const metaDesc =
	"Detrás del proyecto estamos Ander Benito y Xabier Madorrán. Somos dos amigos jóvenes y nacidos el mismo día que compartimos la ilusión por el proyecto: Ander es ingeniero en telecomunicaciones y se encarga, principalmente, del desarrollo de la web. Xabier, en cambio, es profesor, y se encarga, principalmente, del contenido.";

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
