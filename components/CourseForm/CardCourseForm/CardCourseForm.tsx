import { useCourseForm } from "../useCourseForm";
import BaseCourseForm from "./BaseCourseForm";
import ThankYouCourseForm from "./ThankYouCourseForm";
import { useState } from "react";
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
const CardCourseForm: React.FC<Props> = ({
  subscriptionData,
  onIgnore,
  onSubmit,
  onClose,
}) => {
  const {
    email,
    name,
    setEmail,
    submitEnabled,
    setTermsAccepted,
    loading,
    success,
    ignoreForm,
    submitForm,
    subscriptionData: innerSD,
  } = useCourseForm(onSubmit, onIgnore);
  const [isThanksOpen, setIsThanksOpen] = useState(true);

  const renderBox = (children: any) => (
    <div
      style={{
        position: "relative",
        padding: "2rem",
        borderRadius: "var(--rounded-l)",
        background:
          "linear-gradient(270deg, var(--warn) 3.12%, var(--warn-c1) 100%)",
        boxShadow: "var(--bshadow-elevate-2)",
      }}
    >
      {children}
    </div>
  );

  if (success && isThanksOpen && innerSD) {
    return renderBox(
      <ThankYouCourseForm
        onClose={() => {
          setIsThanksOpen(false);
          onClose && onClose(name, email, innerSD);
        }}
      />
    );
  }
  if (subscriptionData && subscriptionData.isFilled()) return null;

  return renderBox(
    <BaseCourseForm
      email={email}
      loading={loading}
      setEmail={setEmail}
      setTermsAccepted={setTermsAccepted}
      submitEnabled={submitEnabled}
      ignoreForm={ignoreForm}
      submitForm={submitForm}
    />
  );
};

export default CardCourseForm;
