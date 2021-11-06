export const DEFAULT_TOTAL_LESSONS = 25;
export const DEFAULT_STUDIED_LESSONS = 15;
export const DEFAULT_NUMBER_POSSIBILITIES = 3;

/** COLOR MAPPING */
const percentColors = [
	{ pct: 0.0, color: { r: 0xee, g: 0x22, b: 0x22 } },
	{ pct: 0.5, color: { r: 0xff, g: 0xbb, b: 0x88 } },
	{ pct: 1.0, color: { r: 0x00, g: 0xcc, b: 0x88 } },
];

export const getColorForPercentage = function (pct: number) {
	for (var i = 1; i < percentColors.length - 1; i++) {
		if (pct < percentColors[i].pct) {
			break;
		}
	}
	const lower = percentColors[i - 1];
	const upper = percentColors[i];
	const range = upper.pct - lower.pct;
	const rangePct = (pct - lower.pct) / range;
	const pctLower = 1 - rangePct;
	const pctUpper = rangePct;
	const color = {
		r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
		g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
		b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
	};
	return "rgb(" + [color.r, color.g, color.b].join(",") + ")";
	// or output as hex if preferred
};

export const calculateProbabilities = (
	totalLessons: number,
	studiedLessons: number,
	numberPossibleLessons: number
) => {
	if (
		totalLessons === undefined ||
		studiedLessons === undefined ||
		numberPossibleLessons === undefined
	)
		return null;

	const notStudiedLessons = totalLessons - studiedLessons;
	let notContainingProbability = 1;

	for (let i = 0; i < numberPossibleLessons; i++) {
		notContainingProbability *= (notStudiedLessons - i) / (totalLessons - i);
	}

	return 1 - notContainingProbability;
};

export const beautifyProbability = (probability: number, nDec: number = 2) => {
	if (isNaN(probability)) return 0;

	return (probability * 100).toFixed(nDec);
};

export interface ProbabilityDict {
	text: string;
	className: string;
	emoji: string;
}
export const reponseProbabilityDict: Record<number, ProbabilityDict> = {
	0: {
		text: "¡Más te vale empezar a estudiar ya!",
		className: "wrong",
		emoji: "",
	},
	2: {
		text: "¡Más te vale empezar a estudiar ya!",
		className: "bad",
		emoji: "",
	},
	3: {
		text: "¡Más te vale empezar a estudiar ya!",
		className: "bad",
		emoji: "",
	},
	4: {
		text: "",
		className: "bad",
		emoji: "",
	},
	5: {
		text: "Prácticamente un 50/50, no te la juegues y estudia un poco más.",
		className: "medium",
		emoji: "",
	},
	6: {
		text: "No está mal pero te recomendamos que estudies más",
		className: "medium",
		emoji: "😉",
	},
	7: {
		text: "No está mal pero te recomendamos que estudies más",
		className: "good",
		emoji: "😉",
	},
	8: {
		text: "",
		className: "correct",
		emoji: "",
	},
	9: {
		text: "¡La probabilidad está de tu lado!",
		className: "correct",
		emoji: "",
	},
	10: {
		text: "Tienes todas las posibilidades de aprobar!",
		className: "perfect",
		emoji: "",
	},
};

export const mapProbabilityToResponse = (
	probability: number
): ProbabilityDict => {
	const prob = Math.floor(probability * 10);

	return (
		reponseProbabilityDict[prob] ?? {
			text: "",
			emoji: "",
			className: "",
		}
	);
};
