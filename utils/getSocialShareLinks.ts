const genSocialText = (title: string) => {
	return `${title}`;
};

export const getTwitterShareLink = (text?: string, url?: string) => {
	return `https://twitter.com/intent/tweet?${
		url ? `url=${url}` : ""
	}&text=${text}`;
};

export const getFacebookShareLink = (text?: string, url?: string) => {
	return `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${text}`;
};

export const getMailShareLink = (path: string, title: string) => {
	return `mailto:partekatu.web@gmail.com?&subject=&cc=&bcc=&body=www.partekatu.com/${path}%0A${genSocialText(
		title
	)}`;
};

export const getWhatsappShareLink = (message: string) => {
	return `https://wa.me/?text=${message}`;
};
