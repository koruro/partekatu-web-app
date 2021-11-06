import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ArticlesContainer from "../../containers/ArticlesSearch/ArticlesContainer";
import { NextPage } from "next";
import CustomHead from "../../components/CustomHead";
import { CategoriesEnum } from "../../types/categories";
import PageBox from "../../components/Page/PageBox/PageBox";

export interface QueryProps {
	p: number; // page
	c: string; // contains
	s: string; // sort
	o: string; // order
	cat: CategoriesEnum;
}

interface Props {
	queryProps: QueryProps;
}

const headTitle = "Todos los Artículos | Partekatu";
const metaDesc =
	"Artículos de temas educativos explicados de forma fácil y visual para estudiantes y profesores. Todos los artículos contienen una infografía.";

const Articles: NextPage<Props> = ({ queryProps }) => {
	return (
		<>
			<CustomHead title={headTitle} metaTitle={headTitle} metaDesc={metaDesc} />
			<PageBox className="home">
				<NavBar />
				<ArticlesContainer queryProps={queryProps} />
				<Footer />
			</PageBox>
		</>
	);
};

Articles.getInitialProps = async ({ query }) => {
	return {
		queryProps: {
			...query,
			p: query.p ? parseInt(query.p as string) : 0,
		} as QueryProps,
	};
};

export default Articles;
