import { useEffect, useState } from "react";
import {
	SurnameData,
	SurnameMatch,
} from "../../../../models/surname/SurnameMatch";
import { CustomSurnameAPIRepository } from "../../../../services/surname/CustomSurnameAPIRepository";
import { MockSurnameAPIRepository } from "../../../../services/surname/MockSurnameAPIRepository";
import Autocomplete from "./Autocomplete/Autocomplete";
import CustomInput from "./Input/CustomInput";
import styles from "./styles.module.css";
import SurnameAnalysis from "./SurnameAnalysis/SurnameAnalysis";

interface Props {}

const repo = new CustomSurnameAPIRepository("http://localhost:4000");

const SurnameFinder: React.FC<Props> = () => {
	const [typedSurname, setTypedSurname] = useState<string>("");
	const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [result, setResult] = useState<SurnameData | null>(null);
	const [autoComplete, setAutoComplete] = useState<SurnameMatch[] | undefined>(
		undefined
	);

	useEffect(() => {
		setIsLoading(true);
		repo
			.getSimilarSurnames(typedSurname)
			.then((response) => {
				setShowAutoComplete(true);
				setAutoComplete(response);
			})
			.finally(() => setIsLoading(false));
	}, [typedSurname]);

	return (
		<div>
			<form
				className={styles["surname-finder__searchform"]}
				onSubmit={(e) => {
					e.preventDefault();

					repo
						.getSurnameData(typedSurname)
						.then((result) => setResult(result))
						.catch((e) => setResult(null))
						.finally(() => setShowAutoComplete(false));
				}}
			>
				<CustomInput
					placeholder="Busca un apellido..."
					value={typedSurname}
					onValueChange={(value) => {
						setShowAutoComplete(true);
						setTypedSurname(value);
					}}
				/>
				{/* <input
					value={typedSurname}
					onChange={(e) => {
						setShowAutoComplete(true);
						setTypedSurname(e.target.value);
					}}
				></input> */}
				{/* {showAutoComplete && (
					<Autocomplete
						matches={autoComplete}
						onMatchClick={(match) => {
							setTypedSurname(match.name);
						}}
					/>
				)} */}
			</form>
			{result && (
				<SurnameAnalysis
					enteredSurname={typedSurname}
					data={result}
					suggestions={autoComplete}
				/>
			)}
		</div>
	);
};

export default SurnameFinder;
