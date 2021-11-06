import { useRouter } from "next/router";
import { useRef } from "react";
import { FaCopy } from "react-icons/fa";
import LazyHydrate from "react-lazy-hydration";
import ReactTooltip from "react-tooltip";
import ArticleSection from "../Section/ArticleSection";
import styles from "./styles.module.css";

interface Props {
	title: string;
}

const getCitation = (title: string, route: string) => {
	const date = new Date();

	const year = date.getFullYear();
	const citationDate = date.toLocaleDateString("es", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return `Partekatu (${year}). ${title}. https://partekatu.com${route}. Recuperado el ${citationDate}.`;
};

const copyCitation = (citation: string) => {
	const tempInput = document.createElement("input");
	tempInput.value = citation;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);
};

const ArticleCitation: React.FC<Props> = ({ title }) => {
	const { asPath } = useRouter();
	const citationRef = useRef<HTMLParagraphElement>();

	return (
		<LazyHydrate whenVisible>
			<ArticleSection className={styles["article-citation"]}>
				<p>
					📚 ¿Te ha servido este articulo como <strong>fuente</strong> para
					algún trabajo? ¡<strong>Cítanos</strong> de la siguiente forma!
				</p>
				<div className={styles["article-citation__cite"]}>
					<p ref={citationRef as any}>{getCitation(title, asPath)}</p>
					<button
						className={styles["article-citation__copy-button"]}
						data-for="copyTooltip"
						data-tip="Click para copiar la cita!"
						aria-label="Copiar cita"
						onClick={() => copyCitation(citationRef.current!.innerHTML)}
					>
						<ReactTooltip id="copyTooltip" effect="solid" />
						<FaCopy size="18px"></FaCopy>
					</button>
				</div>
			</ArticleSection>
		</LazyHydrate>
	);
};

export default ArticleCitation;
