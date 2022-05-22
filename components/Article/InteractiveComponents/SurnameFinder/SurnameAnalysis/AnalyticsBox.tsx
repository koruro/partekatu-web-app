import classNames from "classnames";
import styles from "./styles.module.css";

type SurnameBoxType = "first" | "second" | "both";

interface Props {
  type: SurnameBoxType;
  surname: string;
  data: number;
}

const loadTextByType = (type: SurnameBoxType) => {
  if (type === "first") return "primer";
  if (type === "second") return "segundo";

  return "primer y segundo";
};

const AnalyticsBox: React.FC<Props> = ({ type, surname, data }) => {
  const formatedNumber = Intl.NumberFormat("es").format(data);
  return (
    <div className={classNames(styles["analytics__box"], "elevate-2")}>
      {data === 0 ? (
        <>
          <p>{"<"} 20 personas</p>
          <span>
            No existen habitantes con{" "}
            <i>
              <b>{surname}</b>
            </i>{" "}
            como <b>{loadTextByType(type)} apellido</b> o su frecuencia es
            inferior a 20 para el total nacional.
          </span>
        </>
      ) : (
        <>
          <p>{formatedNumber} personas</p>
          <span>
            Tienen{" "}
            <i>
              <b>{surname}</b>
            </i>{" "}
            como <b>{loadTextByType(type)} apellido</b>.
          </span>
        </>
      )}
    </div>
  );
};

export default AnalyticsBox;
