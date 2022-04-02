import styles from "./styles.module.css";

interface Props {
	surname: string;
}

const AnalyticsMissing: React.FC<Props> = ({ surname }) => {
	return (
		<div className={styles["analytics-missing"]}>
			<p style={{ textAlign: "center", fontSize: "1.2rem" }}>
				Ahora, es un <b>apellido minoritario</b>: no existen habitantes con el
				apellido
				<b>{surname}</b> o su frecuencia es inferior a 20 para el total
				nacional. Según las{" "}
				<a
					target="__blank"
					rel="noopener noreferrer"
					href="https://www.ine.es/widgets/nombApell/index.shtml"
				>
					Estadísticas del Padrón Continuo del INE
				</a>{" "}
				a fecha 01/01/2020.
			</p>
		</div>
	);
};

export default AnalyticsMissing;
