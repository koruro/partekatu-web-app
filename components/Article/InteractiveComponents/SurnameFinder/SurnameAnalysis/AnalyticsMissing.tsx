import styles from "./styles.module.css";

const AnalyticsMissing = () => {
	return (
		<div className={styles["analytics-missing"]}>
			<p style={{ textAlign: "center", fontSize: "1.2rem" }}>
				Euskaltzaindia no tiene los suficientes datos como para determinlar la
				cantidad de personas que tienen este apellido
			</p>
		</div>
	);
};

export default AnalyticsMissing;
