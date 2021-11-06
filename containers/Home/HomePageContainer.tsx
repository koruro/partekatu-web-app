import CategoryList from "../../components/Categories/CategoryList/CategoryList";
import PageContainerBox from "../../components/Page/PageContainerBox/PageContainerBox";
import ButtonLink from "../../components/Shared/Buttons/ButtonLink";
import HomeLogoBox from "../../components/Home/LogoBox/HomeLogoBox";
import styles from "./styles.module.css";
import { Article } from "../../models/Article";
import HomeArticleList from "../../components/Articles/HomeArticleList/HomeArticlesList";
import PartekatuLogo from "../../components/Shared/PartekatuLogo";

interface Props {
	newArticles: Article[];
	highlightedArticles: Article[];
}

const HomePageContainer: React.FC<Props> = ({
	newArticles,
	highlightedArticles,
}) => {
	return (
		<PageContainerBox breakLimit="xl">
			<HomeLogoBox>
				<PartekatuLogo />
			</HomeLogoBox>
			<CategoryList className={styles["home__categories"]} />
			<HomeArticleList
				newArticles={newArticles}
				highlightedArticles={highlightedArticles}
			/>
			<ButtonLink
				href="articulos"
				className={styles["home__button"]}
				style={{ marginTop: "5rem" }}
			>
				Ver todos los artículos
			</ButtonLink>
		</PageContainerBox>
	);
};

export default HomePageContainer;
