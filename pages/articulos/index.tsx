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

const headTitle = "Todos los artículos de partekatu.com";
const metaDesc =
	"En Partekatu tenemos artículos de todo lo que puedas necesitar en torno al euskera ¡Simplemente busca lo que necesites y aprende!";

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
			p: parseQueryPage(query.p),
		} as QueryProps,
	};
};

const parseQueryPage = (page?: string | string[]): number => {
	if (!page) return 0;

	if (Array.isArray(page)) return 0;

	try {
		return parseInt(page as string);
	} catch (error) {
		return 0;
	}
};

export default Articles;
