import { useEffect, useState } from "react";
import ArticleRecommendations from "../../components/Article/ArticleRecommendations";
import FlexCenterBox from "../../components/Page/FlexCenterBox/FlexCenterBox";
import Logo404 from "../../components/Shared/Logo404";
import { Article } from "../../models/Article";
import { articleRepository } from "../../services/bootstrap";
import styles from "./styles.module.css";

const NUM_RECOMMENDATIONS = 5;

const ErrorArticleContainer = () => {
	const [recommendations, setRecommendations] = useState<Article[]>([]);
	useEffect(() => {
		articleRepository
			.getArticles({ limit: 5 })
			.then((data) => setRecommendations(data))
			.catch(() => setRecommendations([]));
	}, []);

	return (
		<FlexCenterBox>
			<div className={styles["error-container"]}>
				<h1>
					<Logo404 width="120px" />
					Ups...
				</h1>
				<div className={styles["error-container__content"]}>
					<p>
						Parece que el artículo que estás intentando buscar no existe en
						nuestra página.
					</p>
				</div>
				<ArticleRecommendations
					recommendations={recommendations}
					showSectionTitle={true}
					isLoading={recommendations.length <= 0}
					numFetched={5}
				/>
			</div>
		</FlexCenterBox>
	);
};

export default ErrorArticleContainer;
