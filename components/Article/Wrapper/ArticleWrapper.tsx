import ArticleData from "../Data/ArticleData";
import { Article } from "../../../models/Article";
import styles from "./styles.module.css";
import ArticleBullets from "../BulletPoints/ArticleBullets";
import SideContainer from "../SideContainer/SideContainer";
import SideShare from "../SideShare/SideShare";
import InfographicButton from "../Infographic/InfographicButton";
import StickyContainer from "../SideContainer/StickyContainer";
import dynamic from "next/dynamic";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

interface Props {
	article: Article;
	recommendations: Article[];
	showSocials?: boolean;
	showCitation?: boolean;
}

const SidebarAd = dynamic(() => import("../../Ads/SidebarAd"), { ssr: false });
const StickyFooterAd = dynamic(
	() => import("../../Ads/StickyFooterAd/StickyFooterAd"),
	{ ssr: false }
);

const ArticleWrapper: React.FC<Props> = ({
	article,
	recommendations,
	showCitation,
	showSocials,
}) => {
	const isPageWide = useMediaQuery(`(min-width: 992px)`);

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
					<StickyContainer>
						{isPageWide && <SidebarAd enabled={true} />}
					</StickyContainer>
				</SideContainer>
			</div>
			{!isPageWide && <StickyFooterAd enabled={true} />}
			{article.infographic && <InfographicButton />}
		</>
	);
};

export default ArticleWrapper;
