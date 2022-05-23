import { GetStaticProps } from "next";
import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import EuskeraCourseContainer from "../containers/EuskeraCourseContainer/EuskeraCourseContainer";
import { Article } from "../models/Article";
import { articleRepository } from "../services/bootstrap";
import { CategoriesEnum } from "../types/categories";
import { genOnlineCourseStructuredData } from "../utils/structuredData";

const headTitle = "El Curso de Euskera Online, Gratis y a tu manera";
const metaTitle = "El Curso de Euskera Online, Gratis y a tu manera";
const metaDesc =
  "Aquí aprenderás euskera desde 0 mediante lecciones cercanas que cualquiera entendería ¡Y, además, todo esto es gratis y a tu rimo!";
const imgUrl =
  "https://images.ctfassets.net/vba2k9hz72yx/5TLW3PYNhNhNBQQtaevW1H/971296463ebe62e8fff85e9e82e2b16c/partekatu-online-course-image.png";

interface Props {
  articles: Record<CategoriesEnum, Article[]>;
}

const LegalPage: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <CustomHead
        title={headTitle}
        metaTitle={metaTitle}
        metaDesc={metaDesc}
        imgUrl={imgUrl}
        structuredData={genOnlineCourseStructuredData({
          headline: headTitle,
          altTitle: metaTitle,
          description: metaDesc,
          image: imgUrl,
        })}
      />
      <PageBox>
        <NavBar />
        <EuskeraCourseContainer articles={articles} />
        <Footer />
      </PageBox>
    </>
  );
};

// Get static props
export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  try {
    // Fetch article and recommendations data
    const landingArticles = await articleRepository.getLandingPageArticles();

    return {
      props: { articles: landingArticles },
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};

export default LegalPage;
