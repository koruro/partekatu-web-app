const BaseCourseForm: React.FC = ({}) => {
  return (
    <>
      <div>
        <span
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
          }}
        >
          📖 ¿Sabías que tenemos un curso de euskera online desde 0?
        </span>
        <div
          style={{
            color: "var(--text-subtle)",
          }}
        >
          <p>
            Está formado por lecciones con vídeos, materiales y ejercicios
            interactivos.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="curso-euskera-online" target="_blank">
              ¡Échale un vistazo 😉!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default BaseCourseForm;
