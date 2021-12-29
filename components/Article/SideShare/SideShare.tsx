import styles from "./styles.module.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import {
	getFacebookShareLink,
	getTwitterShareLink,
} from "../../../utils/getSocialShareLinks";
import { useRouter } from "next/router";

interface Props {
	title?: string;
}

const SideShare: React.FC<Props> = ({ title }) => {
	const { asPath } = useRouter();

	return (
		<div className={`${styles["side-share"]} elevate-2`}>
			<p>Compartir</p>
			<div className={styles["side-share__icons"]}>
				<a
					className="hoverable-elevate"
					href={getFacebookShareLink(asPath)}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="share with Facebook"
				>
					<FaFacebookF />
				</a>
				<a
					className="hoverable-elevate"
					href={getTwitterShareLink(asPath, title ?? "")}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="share with Twitter"
				>
					<FaTwitter />
				</a>
			</div>
		</div>
	);
};

export default SideShare;
