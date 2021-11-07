import { FaDownload } from "react-icons/fa";
import ArticleSection from "../Section/ArticleSection";
import ArticleSectionHeader from "../Section/ArticleSectionHeader";
import styles from "./styles.module.css";
import LazyHydrate from "react-lazy-hydration";
import { Infographic } from "../../../models/Infographic";

interface Props {
	infographic: Infographic;
}

const ArticleInfographic: React.FC<Props> = ({ infographic }) => {
	if (!infographic) return null;

	const download = () => {
		fetch(infographic.file.url).then((response) =>
			response.arrayBuffer().then((buffer) => {
				const format = infographic.file.contentType.split("/")[1];
				const url = window.URL.createObjectURL(new Blob([buffer]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", infographic.title + `.${format}`);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			})
		);
	};
	return (
		<LazyHydrate whenVisible>
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
