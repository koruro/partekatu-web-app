import { Article } from "../models/article/Article";
import { getArticleWordCount } from "./articleMetrics";
import { formatDate } from "./formatDate";

export const genArticleStructuredData = (article: Article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    alternativeHeadline: article.seoMetadata.metaTitle,
    image: article.banner,
    editor: "Xabier Madorran, Ander Benito",
    author: {
      "@type": "Organization",
      url: "https://partekatu.com/quienes-somos",
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

export const genOnlineCourseStructuredData = (args: {
  image: string;
  headline: string;
  altTitle: string;
  description: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    headline: args.headline,
    alternativeHeadline: args.altTitle,
    image: args.image,
    editor: "Xabier Madorran, Ander Benito",
    author: {
      "@type": "Organization",
      url: "https://partekatu.com/quienes-somos",
      name: "Partekatu",
    },
    publisher: {
      "@type": "Organization",
      name: "Partekatu",
    },
    url: `https://partekatu.com/curso-euskera-online`,
    datePublished: formatDate(new Date("2022-01-10")),
    dateCreated: formatDate(new Date("2022-01-10")),
    dateModified: formatDate(new Date("2022-01-10")),
    description: args.description,
    teaches: "euskera",
    educationalLevel: "beginner",
    learningResourceType: "language",
  };
};
