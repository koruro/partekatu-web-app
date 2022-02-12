export const generateDownloadFromUrl = (url: string, outputName: string) => {
	fetch(url).then((response) =>
		response.arrayBuffer().then((buffer) => {
			const url = window.URL.createObjectURL(new Blob([buffer]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", outputName);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		})
	);
};
