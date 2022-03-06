import { SurnameData } from "../../../../../models/surname/SurnameMatch";

interface Props {
	data: SurnameData;
	enteredSurname: string;
}

const loadText = (data: SurnameData, enteredSurname: string) => {
	if (data.isAcademic) {
		return <p>El apellido {data.academic.surname} es vasco</p>;
	}
	return (
		<p>
			El apellido {data.normal.surname} es vasco, pero Euskaltzaindia recomienda{" "}
			{data.academic.surname} como forma académica correcta del apellido
		</p>
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
			{loadText(data, enteredSurname)}
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
			<p>Además, en España...</p>
			<p>
				{analytics.analytics.firstOnly} personas tienen {data.surname} como
				primer apellido.
			</p>
			<p>
				{analytics.analytics.secondOnly} personas tienen {data.surname} como
				segundo apellido.
			</p>
			<p>
				{analytics.analytics.both} personas tienen {data.surname} como primer y
				segundo apellido.
			</p>
		</div>
	);
};

export default SurnameAnalysis;
