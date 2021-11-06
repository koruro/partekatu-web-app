import React from "react";
import LazyHydrate from "react-lazy-hydration";
import ArticleSection from "../Section/ArticleSection";
import ArticleSectionHeader from "../Section/ArticleSectionHeader";
import styles from "./styles.module.css";

interface Props {
	videoUrl: string;
	title?: string;
}

const VIDEO_TITLE = "Video Relacionado";

const getEmbedCode = (videoUrl: string) => {
	const regExp =
		/^.*(?:youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?)\??v?=?([^#\&\?]*).*/;
	const match = videoUrl.match(regExp);

	if (!match) return null;

	return match[1];
};

const ArticleVideo: React.FC<Props> = ({ videoUrl, title }) => {
	if (!videoUrl) return null;
	const embededCode = getEmbedCode(videoUrl);
	return (
		<LazyHydrate ssrOnly>
			<ArticleSection>
				<ArticleSectionHeader id="video">Vídeo</ArticleSectionHeader>
				<iframe
					className={styles["article-video"]}
					title={title ? `${title} - ${VIDEO_TITLE}` : VIDEO_TITLE}
					src={videoUrl}
					frameBorder="0"
					loading="lazy"
					srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${embededCode}><img decoding=async loading="lazy" src=https://i3.ytimg.com/vi/${embededCode}/hqdefault.jpg></a>`}
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</ArticleSection>
		</LazyHydrate>
	);
};

export default ArticleVideo;
