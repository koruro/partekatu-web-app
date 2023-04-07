import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";

const FaqSection = () => {
  return (
    <section>
      <PageContainerBox breakLimit="xl">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            Preguntas frecuentes
          </h2>
        </div>
      </PageContainerBox>
    </section>
  );
};

export default FaqSection;
