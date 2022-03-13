import {
	SurnameData,
	SurnameMatch,
} from "../../../../../models/surname/SurnameMatch";
import styles from "./styles.module.css";

interface Props {
	data: SurnameData;
	enteredSurname: string;
}

const loadText = (data: SurnameData, enteredSurname: string) => {
	if (!data.isBasque) {
		return (
			<>
				El apellido <span>{enteredSurname}</span> no es de origen vasco
			</>
		);
	}
	if (data.isAcademic) {
		return (
			<>
				El apellido <span>{data.academic.surname}</span> es considerado de
				origen vasco
			</>
		);
	}
	return (
		<>
			El apellido <span>{data.normal.surname}</span> es vasco, pero
			Euskaltzaindia recomienda <span>{data.academic.surname}</span> como forma
			académica correcta del apellido
		</>
	);
};

const getAnalytics = (data: SurnameData) => {
	if (data.isAcademic) return data.academic;
	return data.normal;
};

const SurnameAnalysis: React.FC<Props> = ({ data, enteredSurname }) => {
	const analytics = getAnalytics(data);
	return (
		<div>
			<p className={styles["title"]}>{loadText(data, enteredSurname)}</p>
			<p className={styles["reference"]}>
				según el documento{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.euskaltzaindia.eus/dok/eaeb/eoda/deiturak.pdf"
				>
					“Euskal Deiturak”
				</a>
				, publicado por la Real Academia de la Lengua Vasca - Euskaltzaindia en
				2005, que emplea{" "}
				<a
					href="https://www.euskaltzaindia.eus/dok/jagonet/DeituraIzendegia_eu.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					los criterios listados aquí
				</a>
				para determinarlo.
			</p>
			{data.isBasque && (
				<>
					<p className={styles["in-addition"]}>Además, en España...</p>
					<div className={styles["analytics"]}>
						<div className={styles["analytics__box"]}>
							<p>{analytics.analytics.firstOnly} personas</p>
							<span>tienen {data.surname} como primer apellido.</span>
						</div>
						<div className={styles["analytics__box"]}>
							<p>{analytics.analytics.secondOnly} personas</p>
							<span>tienen {data.surname} como segundo apellido.</span>
						</div>
						<div className={styles["analytics__box"]}>
							<p>{analytics.analytics.both} personas</p>
							<span>tienen {data.surname} como primer y segundo apellido.</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default SurnameAnalysis;
