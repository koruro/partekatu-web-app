const getMediaQuery = (type: string, size: string) => {
	return `@media (${type}-width: ${size})`;
};

export default getMediaQuery;
