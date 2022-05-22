import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageBox from "../components/Page/PageBox/PageBox";
import ErrorArticleContainer from "../containers/Error/ErrorArticleContainer";

export default function Custom404() {
  return (
    <PageBox>
      <NavBar />
      <ErrorArticleContainer />
      <Footer />
    </PageBox>
  );
}
