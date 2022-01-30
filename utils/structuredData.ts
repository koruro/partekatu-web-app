import { Article } from "../models/Article";
import { getArticleWordCount } from "./articleMetrics";
import { formatDate } from "./formatDate";

export const genArticleStructuredData = (article: Article): Object => {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: article.title,
		alternativeHeadline: article.seoMetadata.metaTitle,
		image: article.banner,
		editor: "Xabier Madorran",
		author: {
			"@type": "Organization",
			url: "https://partekatu.com",
			name: "Partekatu",
		},
		publisher: {
			"@type": "Organization",
			name: "Partekatu",
		},
		genre: article.category.name,
		wordcount: getArticleWordCount(article.content),
		url: `https://partekatu.com/${article.slug}`,
		datePublished: formatDate(new Date(article.publishedAt)),
		dateCreated: formatDate(new Date(article.createdAt)),
		dateModified: formatDate(new Date(article.publishedAt)),
		description: article.description,
	};
};
