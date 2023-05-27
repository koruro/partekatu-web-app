import { GetStaticProps } from "next";
import BasicCourseLandingContainer from "../components/CourseLandingPage/LandingPage";
import CustomHead from "../components/CustomHead";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import { genOnlineCourseStructuredData } from "../utils/structuredData";
import {
  CoursePopupData,
  CoursePopupState,
  useCoursePopupDataStorage,
} from "../components/CourseForm/useCoursePopupStorage";
import { useEffect } from "react";

const headTitle = "Curso de Euskera Online desde 0: Aprende Fácil y Rápido";
const metaTitle = "Curso de Euskera Online desde 0: Aprende Fácil y Rápido";
const metaDesc =
  "¿Quieres hablar en euskera? Mediante este curso de euskera aprenderás de forma sencilla mediante vídeos, ejercicios e infografías ¡Entra y aprende!";
const imgUrl = "/course-landing/course-thumbnail.png";

const OnlineCourseLandingPage: React.FC = () => {
  const { popupData, setPopupData } = useCoursePopupDataStorage();

  useEffect(() => {
    if (popupData?.state === CoursePopupState.VISITED) return;
    const timeout = setTimeout(
      () =>
        setPopupData(new CoursePopupData(new Date(), CoursePopupState.VISITED)),
      10000
    );
    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default OnlineCourseLandingPage;
