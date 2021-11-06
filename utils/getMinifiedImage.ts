export const getMinifiedImage = (url: string) => {
	const params = new URLSearchParams(url);

	params.set("q", "30");
	params.set("w", "800");

	return decodeURIComponent(params.toString());
};
