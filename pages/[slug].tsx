import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import ArticleContainer from "../containers/ArticleContainer";
import { Article } from "../models/Article";
import { articleRepository } from "../services/bootstrap";
import { markdownToHtml } from "../utils/markdownToHtml";

interface Props {
	article: Article;
	recommendations: Article[];
}

const ArticlePage: React.FC<Props> = ({ article, recommendations }) => {
	return (
		<PageBox>
			<NavBar />
			<ArticleContainer article={article} recommendations={recommendations} />
			<Footer />
		</PageBox>
	);
};

// Get all slug paths
export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await articleRepository.getArticleSlugs();

	const paths = slugs.map((param) => ({
		params: param,
	}));

	return { paths, fallback: false };
};

// Get static props
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		// Fetch article and recommendations data
		const article = await articleRepository.getArticleBySlug(
			params!.slug as string
		);
		const recommendations = await articleRepository.getArticles();

		const htmlContent = await markdownToHtml(article.content);
		const referencesHtmlContent = await markdownToHtml(article.references);

		return {
			props: {
				article: {
					...article,
					content: htmlContent,
					references: referencesHtmlContent,
				},
				recommendations,
			},
		};
	} catch (error) {
		return { props: {} };
	}
};

export default ArticlePage;
