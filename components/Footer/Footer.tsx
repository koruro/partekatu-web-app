import { useMediaQuery } from "../../hooks/useMediaQuery";
import FixedPopupForm from "../CourseForm/FixedCoursePopupForm/FixedCoursePopupForm";
import { useCourseDataStorage } from "../CourseForm/useCourseDataStorage";
import FooterInformation from "./FooterInformation";

const Footer: React.FC = () => {
  const isPageWide = useMediaQuery(`(min-width: 790px)`);
  const { subscriptionData, setSubscriptionData } = useCourseDataStorage();

  return (
    <footer
      style={{
        marginTop: "4rem",
      }}
    >
      {isPageWide && !subscriptionData?.isFilled() && (
        <FixedPopupForm
          subscriptionData={subscriptionData}
          onClose={(_, __, sd) => setSubscriptionData(sd)}
          onIgnore={(_, __, sd) => setSubscriptionData(sd)}
        />
      )}
      <FooterInformation />
    </footer>
  );
};

export default Footer;
