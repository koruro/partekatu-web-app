export interface SurnameAnalytics {
  firstOnly: number | null;
  secondOnly: number | null;
  both: number | null;
}

export interface SurnameMatch {
  surname: string;
  similarity: number;
}

export interface SurnameData {
  surname: string;
  isBasque: boolean;
  isAcademic: boolean;
  analytics: SurnameAnalytics;
  relations: string[];
  suggestions: SurnameMatch[];
}
