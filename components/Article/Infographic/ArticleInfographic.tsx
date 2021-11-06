import { FaDownload } from "@react-icons/all-files/fa/FaDownload";
import ArticleSection from "../Section/ArticleSection";
import ArticleSectionHeader from "../Section/ArticleSectionHeader";
import styles from "./styles.module.css";
import LazyHydrate from "react-lazy-hydration";

interface Props {
	infographic: any;
}

const getInfographicDimensions = (infographic: any) => {
	const defaultDimensions = {
		height: infographic.height ?? 1000,
		width: infographic.width ?? 500,
	};

	if (!infographic.formats) {
		return defaultDimensions;
	}

	if (!infographic.formats.medium) {
		return defaultDimensions;
	}

	return {
		height: infographic.formats.medium.height,
		width: infographic.formats.medium.width,
	};
};

const ArticleInfographic: React.FC<Props> = ({ infographic }) => {
	if (!infographic) return null;

	const download = () => {
		fetch(infographic.url).then((response) =>
			response.arrayBuffer().then((buffer) => {
				const url = window.URL.createObjectURL(new Blob([buffer]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", infographic.name + infographic.ext);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			})
		);
	};
	return (
		<LazyHydrate ssrOnly>
			<ArticleSection>
				<ArticleSectionHeader id={`infografia`} type={"info"}>
					Infografía
				</ArticleSectionHeader>
				<div className={styles["article-infographic"]}>
					<div
						className={styles["article-infographic__download-button-container"]}
					>
						<a download onClick={() => download()}>
							<FaDownload size="14px" color="white" />
						</a>
					</div>
					<img
						title={infographic.title}
						alt={infographic.description}
						src={infographic.file.url}
						decoding="async"
						loading="lazy"
						// height={getInfographicDimensions(infographic).height}
						// width={getInfographicDimensions(infographic).width}
					/>
				</div>
			</ArticleSection>
		</LazyHydrate>
	);
};

export default ArticleInfographic;
