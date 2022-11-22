import { useCourseForm } from "../useCourseForm";
import BaseCourseForm from "./BaseCourseForm";
import ThankYouCourseForm from "./ThankYouCourseForm";
import { useState } from "react";

const CardCourseForm = () => {
  const {
    email,
    setEmail,
    submitEnabled,
    setTermsAccepted,
    loading,
    success,
    ignoreForm,
    submitForm,
    subscriptionData,
  } = useCourseForm();
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

  if (success && isThanksOpen) {
    return renderBox(
      <ThankYouCourseForm onClose={() => setIsThanksOpen(false)} />
    );
  }
  if (subscriptionData && subscriptionData.isFilled()) return null;

  return renderBox(
    <BaseCourseForm
      email={email}
      ignoreForm={ignoreForm}
      loading={loading}
      setEmail={setEmail}
      setTermsAccepted={setTermsAccepted}
      submitEnabled={submitEnabled}
      submitForm={submitForm}
    />
  );
};

export default CardCourseForm;
