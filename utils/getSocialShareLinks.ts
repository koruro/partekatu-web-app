const genSocialText = (title: string) => {
	return `Visita nuestro artículo ${title}`;
};

export const getTwitterShareLink = (path: string, title: string) => {
	return `https://twitter.com/intent/tweet?url=https://www.partekatu.com${path}&text=${genSocialText(
		title
	)}`;
};

export const getFacebookShareLink = (path: string) => {
	return `https://www.facebook.com/sharer/sharer.php?u=https://www.partekatu.com${path}`;
};

export const getMailShareLink = (path: string, title: string) => {
	return `mailto:partekatu.web@gmail.com?&subject=&cc=&bcc=&body=www.partekatu.com/${path}%0A${genSocialText(
		title
	)}`;
};
