import CategoryList from "../../components/Categories/CategoryList/CategoryList";
import PageContainerBox from "../../components/Page/PageContainerBox/PageContainerBox";
import ButtonLink from "../../components/Shared/Buttons/ButtonLink";
import HomeLogoBox from "../../components/Home/LogoBox/HomeLogoBox";
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
      <div style={{ padding: "0 1rem" }}>
        <HomeLogoBox>
          <PartekatuLogo />
          <h1>aprende euskera</h1>
        </HomeLogoBox>
        <CategoryList style={{ marginBottom: "2rem" }} categoryAs="h2" />
        <HomeArticleList
          newArticles={newArticles}
          highlightedArticles={highlightedArticles}
        />
        <ButtonLink
          href="articulos"
          style={{
            cursor: "pointer",
            display: "block",
            marginInline: "auto",
            marginTop: "5rem",
          }}
        >
          Ver todos los artículos
        </ButtonLink>
      </div>
    </PageContainerBox>
  );
};

export default HomePageContainer;
