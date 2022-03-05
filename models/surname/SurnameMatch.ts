export interface SurnameData {
	normal: string;
	academic: string;
	normalStats: {
		firstOnly: number;
		secondOnly: number;
		both: number;
	};
	academicStats: {
		firstOnly: number;
		secondOnly: number;
		both: number;
	};
}

export interface SurnameMatch {
	surname: string;
	similarity: number;
}
