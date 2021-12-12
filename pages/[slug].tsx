import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import ArticleContainer from "../containers/ArticleContainer";
import { Article } from "../models/Article";
import { articleRepository } from "../services/bootstrap";
import { ArticleMarkdownParser } from "../utils/markdownToHtml";

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
export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
	try {
		// Fetch article and recommendations data
		const article = await articleRepository.getArticleBySlug(
			params!.slug as string,
			{ preview }
		);

		const recommendations = await articleRepository.getArticles({
			limit: 3,
			excludeSlugs: [article.slug],
		});

		const htmlContent = new ArticleMarkdownParser(article.content);
		const referencesHtmlContent = new ArticleMarkdownParser(article.references);

		await htmlContent.parse();
		await referencesHtmlContent.parse();

		const bullets = htmlContent.getBulletPoints(
			article.bulletPoints?.map((bullet) => bullet.name)
		);

		return {
			props: {
				article: {
					...article,
					content: htmlContent.getRawHtml(),
					references: referencesHtmlContent.getRawHtml(),
					bulletPoints: bullets,
				},
				recommendations,
			},
		};
	} catch (error) {
		console.error(error);
		return { props: {} };
	}
};

export default ArticlePage;
