const genSocialText = (title: string) => {
	return `${title}`;
};

export const getTwitterShareLink = (text?: string, url?: string) => {
	const _text = text ? encodeURIComponent(text) : null;
	return `https://twitter.com/intent/tweet?${
		url ? `url=${url}` : ""
	}&text=${_text}`;
};

export const getFacebookShareLink = (
	title: string,
	text?: string,
	url?: string
) => {
	const _title = title ? encodeURIComponent(title) : null;
	const _text = text ? encodeURIComponent(text) : null;
	return `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${_title}&${
		_text ? `quote=${_text}` : ""
	}`;
};

export const getMailShareLink = (path: string, title: string) => {
	return `mailto:partekatu.web@gmail.com?&subject=&cc=&bcc=&body=www.partekatu.com/${path}%0A${genSocialText(
		title
	)}`;
};

export const getWhatsappShareLink = (message: string) => {
	const _message = encodeURIComponent(message);
	return `https://wa.me/?text=${_message}`;
};
