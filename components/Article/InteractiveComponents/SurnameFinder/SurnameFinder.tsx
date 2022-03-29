import { useRouter } from "next/router";
import { LegacyRef, useEffect, useRef, useState } from "react";
import {
	SurnameData,
	SurnameMatch,
} from "../../../../models/surname/SurnameMatch";
import { CustomSurnameAPIRepository } from "../../../../services/surname/CustomSurnameAPIRepository";
import { MockSurnameAPIRepository } from "../../../../services/surname/MockSurnameAPIRepository";
import LoadingRing from "../../../Loading/Ring/LoadingRing";
import Autocomplete from "./Autocomplete/Autocomplete";
import CustomInput from "./Input/CustomInput";
import styles from "./styles.module.css";
import SurnameAnalysis from "./SurnameAnalysis/SurnameAnalysis";
import SurnameSuggestions from "./SurnameSuggestions/SurnameSuggestions";

interface Props {}

const repo = new CustomSurnameAPIRepository("http://localhost:4000");

const SurnameFinder: React.FC<Props> = () => {
	const [typedSurname, setTypedSurname] = useState<string>("");
	const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
	const [result, setResult] = useState<SurnameData | null>(null);
	const [resultIsLoading, setResultIsLoading] = useState<boolean>(false);
	const [matches, setMatches] = useState<SurnameMatch[] | undefined>(undefined);

	const router = useRouter();

	const handleOnSubmit = (surname: string) => {
		setResultIsLoading(true);
		setShowAutoComplete(false);
		repo
			.getSurnameData(surname)
			.then((result) => {
				setResult(result);
			})
			.catch((e) => setResult(null))
			.finally(() => {
				setResultIsLoading(false);
			});
	};

	useEffect(() => {
		const querySurname = router.query.surname;
		if (!querySurname) return;

		setTypedSurname(querySurname as string);
		handleOnSubmit(querySurname as string);
	}, []);

	useEffect(() => {
		repo.getSimilarSurnames(typedSurname).then((response) => {
			// setShowAutoComplete(true);
			setMatches(response);
		});
	}, [typedSurname]);

	const showAnalytics = () => {
		if (resultIsLoading)
			return (
				<div style={{ display: "flex", justifyContent: "center" }}>
					<LoadingRing />
				</div>
			);
		if (!result) return null;

		return (
			<>
				<SurnameAnalysis enteredSurname={typedSurname} data={result} />
				<SurnameSuggestions
					hrefFactory={(suggestion) =>
						`${router.pathname}?surname=${suggestion.surname}`
					}
					suggestions={result?.suggestions}
				/>
			</>
		);
	};

	return (
		<div>
			<form
				className={styles["surname-finder__searchform"]}
				onSubmit={(e) => {
					e.preventDefault();
					router.push(router.pathname, {
						query: {
							...router.query,
							surname: typedSurname,
						},
					});
					handleOnSubmit(typedSurname);
				}}
			>
				<CustomInput
					placeholder="Busca un apellido..."
					value={typedSurname}
					onValueChange={(value) => {
						setShowAutoComplete(true);
						setTypedSurname(value);
					}}
					onBlur={() => {
						setTimeout(() => {
							setShowAutoComplete(false);
						}, 100);
					}}
					onFocus={() => setShowAutoComplete(true)}
				/>
				{/* <input
					value={typedSurname}
					onChange={(e) => {
						setShowAutoComplete(true);
						setTypedSurname(e.target.value);
					}}
				></input> */}
				{showAutoComplete && (
					<Autocomplete
						matches={matches?.map((a) => ({ name: a.surname }))}
						onMatchClick={(match) => {
							router.push(router.pathname, {
								query: {
									...router.query,
									surname: match.name,
								},
							});
							setTypedSurname(match.name);
							handleOnSubmit(match.name);
						}}
					/>
				)}
				{showAnalytics()}
			</form>
		</div>
	);
};

export default SurnameFinder;
