import CardCourseForm from "../CardCourseForm/CardCourseForm";

const FixedCoursePopupForm = () => {
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
      <CardCourseForm />
    </div>
  );
};

export default FixedCoursePopupForm;
