const WPM = 225;

export const getArticleWordCount = (content: string): number => {
	// Calculates the estimated reading minutes
	const words = content.trim().split(/\s+/).length;

	return words;
};

export const getReadingTime = (wordCount: number, wpm = WPM): number => {
	const time = Math.ceil(wordCount / wpm);

	return time;
};
