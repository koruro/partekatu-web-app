import {
	SurnameAnalytics,
	SurnameData,
} from "../../../../../models/surname/SurnameMatch";
import { isNullOrUndefined } from "../../../../../utils/isNullOrUndefined";
import AnalyticsBox from "./AnalyticsBox";
import AnalyticsMissing from "./AnalyticsMissing";
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
	return data.relations.length <= 1 ? (
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
					{data.relations.map((relation, index) => (
						<li key={index}>{relation}</li>
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
						<AnalyticsMissing />
					) : (
						<>
							<p className={styles["in-addition"]}>Además, en España...</p>
							<div className={styles["analytics"]}>
								<AnalyticsBox
									surname={data.surname}
									type="first"
									data={data.analytics.firstOnly!}
								/>
								<AnalyticsBox
									surname={data.surname}
									type="second"
									data={data.analytics.secondOnly!}
								/>
								<AnalyticsBox
									surname={data.surname}
									type="both"
									data={data.analytics.both!}
								/>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default SurnameAnalysis;
