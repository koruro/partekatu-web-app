export interface SurnameAnalytics {
	firstOnly: number;
	secondOnly: number;
	both: number;
}

export interface SurnameData {
	surname: string;
	isAcademic: boolean;
	normal: {
		surname: string;
		analytics: SurnameAnalytics;
	};
	academic: {
		surname: string;
		analytics: SurnameAnalytics;
	};
}

export interface SurnameMatch {
	surname: string;
	similarity: number;
}
