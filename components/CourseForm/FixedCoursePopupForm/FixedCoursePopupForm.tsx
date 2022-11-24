import CardCourseForm from "../CardCourseForm/CardCourseForm";
import { CourseSubscriptionStorageData } from "../courseSubscriptionStorageService";

interface Props {
  subscriptionData?: CourseSubscriptionStorageData;
  onSubmit?: (
    name: string,
    email: string,
    data: CourseSubscriptionStorageData
  ) => void;
  onIgnore?: (
    name: string,
    email: string,
    data: CourseSubscriptionStorageData
  ) => void;
  onClose?: (
    name: string,
    email: string,
    data: CourseSubscriptionStorageData
  ) => void;
}
const FixedCoursePopupForm: React.FC<Props> = ({
  onClose,
  subscriptionData,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: 2,
        maxWidth: "600px",
        margin: "1rem",
      }}
    >
      <CardCourseForm
        onIgnore={onClose}
        onClose={onClose}
        subscriptionData={subscriptionData}
      />
    </div>
  );
};

export default FixedCoursePopupForm;
