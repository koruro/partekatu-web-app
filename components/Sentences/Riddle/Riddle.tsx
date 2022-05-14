import classNames from "classnames";
import { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  riddle: string[];
  solution: string;
}

const Riddle: React.FC<Props> = ({ riddle, solution }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className={styles["riddle"]}>
      {riddle.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
      {solution && (
        <>
          <button
            className={classNames("hoverable-elevate", "button-padding-1_5")}
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? "Ocultar" : "Ver"} respuesta
          </button>
          <span
            className={classNames(styles["riddle__solution"], {
              [`${styles["riddle__solution--show"]}`]: showSolution,
            })}
          >
            “{solution}”
          </span>
        </>
      )}
    </div>
  );
};

export default Riddle;
