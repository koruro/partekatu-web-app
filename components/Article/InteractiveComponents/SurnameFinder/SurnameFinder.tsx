import { useEffect, useState } from "react";
import {
	SurnameData,
	SurnameMatch,
} from "../../../../models/surname/SurnameMatch";
import { MockSurnameAPIRepository } from "../../../../services/surname/MockSurnameAPIRepository";
import Autocomplete from "./Autocomplete/Autocomplete";
import CustomInput from "./Input/CustomInput";
import styles from "./styles.module.css";

interface Props {}

const repo = new MockSurnameAPIRepository();

const SurnameFinder: React.FC<Props> = () => {
	const [typedSurname, setTypedSurname] = useState<string>("");
	const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
	const [result, setResult] = useState<SurnameData | null>(null);
	const [autoComplete, setAutoComplete] = useState<{ name: string }[] | null>(
		null
	);

	useEffect(() => {
		repo.getSimilarSurnames(typedSurname).then((response) => {
			if (!response) return;
			if (response.length <= 0) {
				setShowAutoComplete(false);
			}

			setShowAutoComplete(true);
			setAutoComplete(response.map((r) => ({ name: r.surname })));
		});
	}, [typedSurname]);

	return (
		<div>
			<form
				className={styles["surname-finder__searchform"]}
				onSubmit={(e) => {
					e.preventDefault();

					repo.getSurnameData(typedSurname).then((result) => setResult(result));
					setShowAutoComplete(false);
				}}
			>
				<CustomInput
					placeholder="Busca un apellido..."
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
				{showAutoComplete && autoComplete && (
					<Autocomplete
						matches={autoComplete}
						onMatchClick={(match) => {
							setTypedSurname(match.name);
						}}
					/>
				)}
			</form>
			{result && <section>{JSON.stringify(result)}</section>}
		</div>
	);
};

export default SurnameFinder;
