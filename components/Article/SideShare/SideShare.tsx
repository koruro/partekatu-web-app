import styles from "./styles.module.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import {
	getFacebookShareLink,
	getTwitterShareLink,
} from "../../../utils/getSocialShareLinks";
import { useRouter } from "next/router";
import ShareButton from "../../Shared/ShareButton/ShareButton";

interface Props {
	title?: string;
}

const SideShare: React.FC<Props> = ({ title }) => {
	const { asPath } = useRouter();

	return (
		<div className={`${styles["side-share"]} elevate-2`}>
			<p>Compartir</p>
			<div className={styles["side-share__icons"]}>
				<ShareButton social="facebook" path={asPath} title={title} />
				<ShareButton social="twitter" path={asPath} title={title} />
			</div>
		</div>
	);
};

export default SideShare;
