import { useMediaQuery } from "../../hooks/useMediaQuery";
import FixedPopupForm from "../CourseForm/FixedCoursePopupForm/FixedCoursePopupForm";
import FooterCourseForm from "../CourseForm/FooterCourseForm/FooterCourseForm";
import FooterInformation from "./FooterInformation";

const Footer: React.FC = () => {
  const isPageWide = useMediaQuery(`(min-width: 790px)`);
  return (
    <footer
      style={{
        marginTop: "4rem",
      }}
    >
      {isPageWide ? <FixedPopupForm /> : <FooterCourseForm />}
      <FooterInformation />
    </footer>
  );
};

export default Footer;
