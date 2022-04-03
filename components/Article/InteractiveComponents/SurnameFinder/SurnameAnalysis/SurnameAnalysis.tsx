import {
	SurnameAnalytics,
	SurnameData,
} from "../../../../../models/surname/SurnameMatch";
import { isNullOrUndefined } from "../../../../../utils/isNullOrUndefined";
import SurnameAsset from "../SurnameAsset";
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
			<section>
				<p className={styles["title"]}>
					El apellido <span>{data.surname}</span> no es de origen vasco,
				</p>
			</section>
		);
	}
	if (data.isAcademic) {
		return (
			<section>
				<p className={styles["title"]}>
					El apellido <span>{data.surname}</span> es vasco,
				</p>
			</section>
		);
	}
	return (
		<section>
			<p className={styles["title"]}>
				El apellido <span>{data.surname}</span> es de origen vasco.
			</p>
			{data.relations.length <= 1 ? (
				<p className={styles["correction"]}>
					Sin embargo, <i>Euskaltzaindia</i> recomienda{" "}
					<i>
						<b>{data.relations[0]}</b>
					</i>{" "}
					como forma académica correcta del apellido con grafía en euskera.
				</p>
			) : (
				<>
					<p className={styles["correction"]}>
						Sin embargo, <i>Euskaltzaindia</i> recomienda estos nombres como
						formas académicas correctas del apellido con grafía en euskera.
					</p>
					<div className={styles["relations"]}>
						<ul>
							{data.relations.map((relation, index) => (
								<li key={index}>{relation}</li>
							))}
						</ul>
					</div>
				</>
			)}
		</section>
	);
};

const getAnalytics = (data: SurnameData): SurnameAnalytics => {
	return data.analytics;
};

const SurnameAnalysis: React.FC<Props> = ({ data, enteredSurname }) => {
	const analytics = getAnalytics(data);
	return (
		<div>
			<div className={styles["main-title"]}>
				<SurnameAsset />
				{loadText(data, enteredSurname)}
			</div>
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
				</a>{" "}
				para determinarlo.
			</p>
			{data.isBasque && (
				<>
					{isNullOrUndefined(analytics.firstOnly) &&
					isNullOrUndefined(analytics.secondOnly) &&
					isNullOrUndefined(analytics.both) ? (
						<AnalyticsMissing surname={data.surname} />
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
							<p className={styles["reference"]}>
								Según las{" "}
								<a href="https://www.ine.es/widgets/nombApell/index.shtml">
									Estadísticas del Padrón Continuo del INE
								</a>{" "}
								a fecha 01/01/2020.
							</p>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default SurnameAnalysis;
