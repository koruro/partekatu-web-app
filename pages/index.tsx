import type { NextPage } from "next";
import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import PageBox from "../components/Page/PageBox/PageBox";
import HomePageContainer from "../containers/Home/HomePageContainer";
import { Article } from "../models/Article";
import { articleRepository } from "../services/bootstrap";

const headTitle = "Partekatu.com - Información Educativa Fácil y Visual";

const metaDesc =
	"Partekatu es la web educativa para estudiantes y profesores. Aquí aprenderás de forma sencilla y visual mediante: Ejemplos, Mapas Conceptuales e Infografías.";

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
				keywords={["educacion", "aprender", "informacion", "facil", "visual"]}
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
		console.error(error);
		return {
			props: {},
		};
	}
}

async function getHighlightArticles() {
	try {
		return await articleRepository.getHighlightArticles({
			limit: 2,
		});
	} catch (error) {
		return [];
	}
}

async function getNewArticles(exclude: Article[]) {
	try {
		return await articleRepository.getArticles({
			limit: 4,
			excludeSlugs: exclude.map((highlight) => highlight.slug),
		});
	} catch (error) {
		return [];
	}
}

export default Home;
