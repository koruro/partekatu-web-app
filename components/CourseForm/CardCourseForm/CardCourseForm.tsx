import BaseCourseForm from "./BaseCourseForm";

const CardCourseForm: React.FC = ({}) => {
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

  return renderBox(<BaseCourseForm />);
};

export default CardCourseForm;
