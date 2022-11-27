import CardCourseForm from "../CardCourseForm/CardCourseForm";

const FooterCourseForm = () => {
  return (
    <div
      style={{
        margin: "2rem 1rem",
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: 2,
        maxWidth: "600px",
      }}
    >
      <CardCourseForm />
    </div>
  );
};

export default FooterCourseForm;
