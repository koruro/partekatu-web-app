import { CoursePopupData } from "../CourseForm/useCoursePopupStorage";
import FixedCoursePopup from "../CoursePopup/FixedCoursePopupForm";
import FooterInformation from "./FooterInformation";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        marginTop: "4rem",
      }}
    >
      <FixedCoursePopup />
      <FooterInformation />
    </footer>
  );
};

export default Footer;
