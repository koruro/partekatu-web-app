import styles from "./styles.module.css";

interface Props {
  onClose: () => void;
}
const ThankYouCourseForm: React.FC<Props> = ({ onClose }) => {
  return (
    <div>
      <span
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
        }}
      >
        🎉 ¡Muchas gracias por suscribirte!
      </span>
      <div
        style={{
          color: "var(--text-subtle)",
          marginBottom: "2rem",
        }}
      >
        <p>
          Te avisaremos por email cuando hayamos sacado el curso para que puedas
          inscribirte al curso.
        </p>
      </div>
      <button
        className="button-padding-1 hoverable-elevate"
        style={{
          alignSelf: "center",
          background: "var(--primary)",
          color: "white",
          border: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "var(--rounded-l)",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        Cerrar
      </button>
    </div>
  );
};

export default ThankYouCourseForm;
