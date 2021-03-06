import { FaImage } from "react-icons/fa";
import styles from "./styles.module.css";

const InfographicButton: React.FC = () => {
  return (
    <a
      className={styles["article-infographic__anchor-button"]}
      href={`#infografia`}
    >
      <FaImage></FaImage>
    </a>
  );
};

export default InfographicButton;
