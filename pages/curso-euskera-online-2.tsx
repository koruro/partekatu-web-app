import { GetStaticProps } from "next";
import BasicCourseLandingContainer from "../components/CourseLandingPage/LandingPage";
import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import { Article } from "../models/Article";
import { CategoriesEnum } from "../types/categories";
import { genOnlineCourseStructuredData } from "../utils/structuredData";

const headTitle = "Curso de Euskera Online desde 0: Aprende Fácil y Rápido";
const metaTitle = "Curso de Euskera Online desde 0: Aprende Fácil y Rápido";
const metaDesc =
  "¿Quieres hablar en euskera? Mediante este curso de euskera aprenderás de forma sencilla mediante vídeos, ejercicios e infografías ¡Entra y aprende!";
const imgUrl =
  "https://images.ctfassets.net/vba2k9hz72yx/5TLW3PYNhNhNBQQtaevW1H/971296463ebe62e8fff85e9e82e2b16c/partekatu-online-course-image.png";

interface Props {
  articles: Record<CategoriesEnum, Article[]>;
}

const LegalPage: React.FC<Props> = () => {
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
        <BasicCourseLandingContainer />
        <Footer />
      </PageBox>
    </>
  );
};

// Get static props
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default LegalPage;
