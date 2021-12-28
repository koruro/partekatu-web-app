import ArticleData from "../Data/ArticleData";
import { Article } from "../../../models/Article";
import styles from "./styles.module.css";
import ArticleBullets from "../BulletPoints/ArticleBullets";
import SideContainer from "../SideContainer/SideContainer";
import SideShare from "../SideShare/SideShare";
import InfographicButton from "../Infographic/InfographicButton";

interface Props {
	article: Article;
	recommendations: Article[];
	showSocials?: boolean;
	showCitation?: boolean;
}
const ArticleWrapper: React.FC<Props> = ({
	article,
	recommendations,
	showCitation,
	showSocials,
}) => {
	return (
		<>
			<div className={styles["article-wrapper"]}>
				<ArticleData
					article={article}
					recommendations={recommendations}
					showCitation={showCitation}
					showSocials={showSocials}
				/>

				<SideContainer>
					<SideShare title={article.seoMetadata.metaTitle} />
					<ArticleBullets
						bullet_points={article.bulletPoints}
						infographic={article.infographic}
					/>
				</SideContainer>
			</div>
			{article.infographic && <InfographicButton />}
		</>
	);
};

export default ArticleWrapper;
