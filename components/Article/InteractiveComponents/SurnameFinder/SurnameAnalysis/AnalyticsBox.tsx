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
	return (
		<div className={styles["analytics__box"]}>
			{data === 0 ? (
				<>
					<p>{"<"} 20 personas</p>
					<span>
						No se han encontrado a más de 20 personas cuyos{" "}
						{loadTextByType(type)}
						apellido sean {surname}
					</span>
				</>
			) : (
				<>
					<p>{data} personas</p>
					<span>
						Tienen {surname} como {loadTextByType(type)} apellido.
					</span>
				</>
			)}
		</div>
	);
};

export default AnalyticsBox;
