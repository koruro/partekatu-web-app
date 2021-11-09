import { useRouter } from "next/router";
import ArticleWrapper from "../components/Article/Wrapper/ArticleWrapper";
import DynamicComponentLoader from "../components/Article/InteractiveComponents/DynamicComponentLoader";
import CustomHead from "../components/CustomHead";
import LoadingRing from "../components/Loading/Ring/LoadingRing";
import PageContainerBox from "../components/Page/PageContainerBox/PageContainerBox";
import { Article } from "../models/Article";
import ErrorArticleContainer from "./Error/ErrorArticleContainer";

interface Props {
	article: Article;
	recommendations: Article[];
}

const ArticleContainer: React.FC<Props> = ({ article, recommendations }) => {
	const metaDesc = article?.description
		? article?.description
		: "Descripcion de ejemplo";
	const metaImage = article.banner;
	const router = useRouter();

	if (router.isFallback) return <LoadingRing />;
	if (!article) return <ErrorArticleContainer />;

	return (
		<>
			<CustomHead
				title={article?.metadata.meta_title}
				metaTitle={article?.metadata.meta_title}
				metaDesc={metaDesc}
				imgUrl={metaImage}
			/>
			<PageContainerBox breakLimit="xl">
				<ArticleWrapper article={article} recommendations={recommendations} />
			</PageContainerBox>
			<DynamicComponentLoader />
		</>
	);
};

export default ArticleContainer;
