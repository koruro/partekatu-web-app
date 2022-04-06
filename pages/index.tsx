import type { NextPage } from "next";
import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import PageBox from "../components/Page/PageBox/PageBox";
import HomePageContainer from "../containers/Home/HomePageContainer";
import { Article } from "../models/Article";
import { ContentRepositoryFactory } from "../services/bootstrap";

const headTitle =
	"Aprende euskera desde 0 de forma fácil y visual - partekatu.com";

const metaDesc =
	"¿El euskera te suena a chino? Entra y te prometemos que aprenderás euskera online de forma sencilla gracias a nuestros artículos e imágenes.";

interface Props {
	newArticles: Article[];
	highlightedArticles: Article[];
}

const Home: NextPage<Props> = ({ newArticles, highlightedArticles }) => {
	return (
		<PageBox className="home">
			<CustomHead
				title={headTitle}
				metaTitle={headTitle}
				metaDesc={metaDesc}
				keywords={["euskera", "aprender", "online", "gratis"]}
			/>
			<HomePageContainer
				newArticles={newArticles}
				highlightedArticles={highlightedArticles}
			/>
			<Footer />
		</PageBox>
	);
};

export async function getServerSideProps(context: any) {
	try {
		const highlightedArticles = await getHighlightArticles();
		const newArticles = await getNewArticles(highlightedArticles);

		return {
			props: {
				newArticles,
				highlightedArticles,
			},
		};
	} catch (error) {
		throw error;
	}
}

async function getHighlightArticles() {
	try {
		const repo = ContentRepositoryFactory.createRepo();
		return await repo.getHighlightArticles({
			limit: 2,
		});
	} catch (error) {
		return [];
	}
}

async function getNewArticles(exclude: Article[]) {
	try {
		const repo = ContentRepositoryFactory.createRepo();
		return await repo.getArticles({
			limit: 4,
			excludeSlugs: exclude.map((highlight) => highlight.slug),
		});
	} catch (error) {
		return [];
	}
}

export default Home;
