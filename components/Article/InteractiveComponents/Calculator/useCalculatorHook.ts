import { useEffect, useState } from "react";
import {
	calculateProbabilities,
	DEFAULT_NUMBER_POSSIBILITIES,
	DEFAULT_STUDIED_LESSONS,
	DEFAULT_TOTAL_LESSONS,
} from "./lib";

export const useCalculatorHook = () => {
	const [totalLessons, setTotalLessons] = useState(DEFAULT_TOTAL_LESSONS);
	const [studiedLessons, setStudiedLessons] = useState(DEFAULT_STUDIED_LESSONS);
	const [numberPossibleLessons, setNumberPossibleLessons] = useState(
		DEFAULT_NUMBER_POSSIBILITIES
	);
	const [probability, setProbability] = useState(1);

	useEffect(() => {
		if (totalLessons < studiedLessons) {
			setStudiedLessons(totalLessons);
		}
		if (totalLessons < numberPossibleLessons) {
			setNumberPossibleLessons(totalLessons);
		}
	}, [totalLessons]);

	useEffect(() => {
		const prob = calculateProbabilities(
			totalLessons,
			studiedLessons,
			numberPossibleLessons
		);
		setProbability(prob);
	}, [totalLessons, studiedLessons, numberPossibleLessons]);

	return {
		probability,
		data: {
			totalLessons,
			studiedLessons,
			numberPossibleLessons,
		},
		setters: { setTotalLessons, setStudiedLessons, setNumberPossibleLessons },
	};
};
