import styles from "./styles.module.css";

interface Props {
	preamble: string;
}
const ArticlePreamble: React.FC<Props> = ({ preamble }) => {
	if (!preamble) return null;
	return <p className={styles["article-preamble"]}>{preamble}</p>;
};

export default ArticlePreamble;
