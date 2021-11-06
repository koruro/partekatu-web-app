import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleSkeletonCard from "../ArticleCard/Skeleton/ArticleSkeletonCard";
import styles from "./styles.module.css";
import { Article } from "../../../models/Article";

interface Props {
	data: Article[];
	isLoading?: boolean;
	numFetched?: number;
	highlightFirst?: boolean;
}

const ArticleList: React.FC<Props> = ({ data, isLoading, numFetched }) => {
	if (isLoading)
		return (
			<div className={styles["articles-list"]}>
				{[...Array(numFetched)].map((_, i) => (
					<ArticleSkeletonCard key={i} />
				))}
			</div>
		);
	if (!data) return null;
	return (
		<div className={styles["articles-list"]}>
			{data.map((article) => (
				<ArticleCard
					key={article.id}
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
	);
};

export default ArticleList;
