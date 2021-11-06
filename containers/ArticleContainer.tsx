import { useRouter } from "next/router";
import React from "react";
import ArticleWrapper from "../components/Article/Wrapper/ArticleWrapper";
import DynamicComponentLoader from "../components/Article/InteractiveComponents/DynamicComponentLoader";
import CustomHead from "../components/CustomHead";
import LoadingRing from "../components/Loading/Ring/LoadingRing";
import PageContainerBox from "../components/Page/PageContainerBox/PageContainerBox";
import { Article } from "../models/Article";
import { CategoriesEnum } from "../types/categories";
import ErrorArticleContainer from "./Error/ErrorArticleContainer";

interface Props {
	article: Article;
	recommendations: Article[];
}

const ArticleContainer: React.FC<Props> = ({ article, recommendations }) => {
	const headTitle = article?.metadata?.meta_title
		? `${article.metadata.meta_title} | Partekatu`
		: "Artículo | Partekatu";
	const metaDesc = article.description
		? article.description
		: "Descripcion de ejemplo";
	const metaImage = article.banner
		? article.banner
		: "https://koruro.s3-sa-east-1.amazonaws.com/Full_Logo_1080_5835b47b57.png";
	const router = useRouter();

	if (router.isFallback) return <LoadingRing />;
	if (!article) return <ErrorArticleContainer />;

	return (
		<>
			<CustomHead
				title={headTitle}
				metaTitle={article?.meta_title}
				metaDesc={metaDesc}
				imgUrl={metaImage}
				loadKatexCss={
					article.category.slug === CategoriesEnum.MATH || article.id === 24
				}
			/>
			<PageContainerBox breakLimit="xl">
				<ArticleWrapper article={article} recommendations={recommendations} />
			</PageContainerBox>
			<DynamicComponentLoader />
		</>
	);
};

export default ArticleContainer;
