import {
	SurnameAnalytics,
	SurnameData,
} from "../../../../../models/surname/SurnameMatch";
import { isNullOrUndefined } from "../../../../../utils/isNullOrUndefined";
import styles from "./styles.module.css";

interface Props {
	data: SurnameData;
	enteredSurname: string;
}

const loadText = (data: SurnameData, enteredSurname: string) => {
	if (!data.isBasque) {
		return (
			<p className={styles["title"]}>
				El apellido <span>{enteredSurname}</span> no es de origen vasco
			</p>
		);
	}
	if (data.isAcademic) {
		return (
			<p className={styles["title"]}>
				El apellido <span>{data.surname}</span> es considerado de origen vasco
			</p>
		);
	}
	return data.relations.length < 1 ? (
		<p className={styles["title"]}>
			El apellido <span>{data.surname}</span> es vasco, pero Euskaltzaindia
			recomienda <span>{data.relations[0]}</span> como forma académica correcta
			del apellido
		</p>
	) : (
		<>
			<p className={styles["title"]}>
				El apellido <span>{data.surname}</span> es vasco, pero Euskaltzaindia
				recomienda estas como formas académicas correctas del apellido:
			</p>
			<div className={styles["relations"]}>
				<ul>
					{data.relations.map((relation) => (
						<li>{relation}</li>
					))}
				</ul>
			</div>
		</>
	);
};

const getAnalytics = (data: SurnameData): SurnameAnalytics => {
	return data.analytics;
};

const SurnameAnalysis: React.FC<Props> = ({ data, enteredSurname }) => {
	const analytics = getAnalytics(data);
	return (
		<div>
			{loadText(data, enteredSurname)}
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
					{isNullOrUndefined(analytics.firstOnly) &&
					isNullOrUndefined(analytics.secondOnly) &&
					isNullOrUndefined(analytics.both) ? (
						<p style={{ textAlign: "center", fontSize: "1.2rem" }}>
							Euskaltzaindia no tiene los suficientes datos como para
							determinlar la cantidad de personas que tienen este apellido
						</p>
					) : (
						<>
							<p className={styles["in-addition"]}>Además, en España...</p>
							<div className={styles["analytics"]}>
								<div className={styles["analytics__box"]}>
									<p>{analytics.firstOnly} personas</p>
									<span>tienen {data.surname} como primer apellido.</span>
								</div>
								<div className={styles["analytics__box"]}>
									<p>{analytics.secondOnly} personas</p>
									<span>tienen {data.surname} como segundo apellido.</span>
								</div>
								<div className={styles["analytics__box"]}>
									{analytics.both === 0 ? (
										<>
											<p>{"<"} 20 personas</p>
											<span>
												No se han encontrado a más de 20 personas cuyos primer y
												segundo apellido sean {data.surname}
											</span>
										</>
									) : (
										<>
											<p>{analytics.both} personas</p>
											<span>
												tienen {data.surname} como primer y segundo apellido.
											</span>
										</>
									)}
								</div>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default SurnameAnalysis;
