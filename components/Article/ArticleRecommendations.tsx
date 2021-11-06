import LazyHydrate from "react-lazy-hydration";
import { Article } from "../../models/Article";
import ArticleCard from "../Articles/ArticleCard/ArticleCard";
import ArticleSection from "./Section/ArticleSection";
import ArticleSectionHeader from "./Section/ArticleSectionHeader";

interface Props {
	recommendations: Article[];
	isLoading?: boolean;
	showSectionTitle?: boolean;
	highlightFirst?: boolean;
	numFetched?: number;
}

const ArticleRecommendations: React.FC<Props> = ({
	recommendations,
	showSectionTitle,
}) => {
	return (
		<LazyHydrate whenVisible>
			<ArticleSection>
				{showSectionTitle && (
					<ArticleSectionHeader>Quizás te interese...</ArticleSectionHeader>
				)}
				<div style={{ display: "grid", rowGap: "1rem" }}>
					{recommendations.map((article) => (
						<ArticleCard
							key={article.slug}
							banner={article.banner}
							category={article.category}
							emoji={article.emoji}
							title={article.title}
							altTitle={article.metadata.title_alt}
							description={article.description}
							slug={article.slug}
						/>
					))}
				</div>
			</ArticleSection>
		</LazyHydrate>
	);
};

export default ArticleRecommendations;
