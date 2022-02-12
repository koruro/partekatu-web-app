import styles from "./styles.module.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import {
	getFacebookShareLink,
	getTwitterShareLink,
} from "../../../utils/getSocialShareLinks";
import { useRouter } from "next/router";
import ShareButton from "../../Shared/ShareButton/ShareButton";
import SocialIcon from "../../Shared/SocialIcon";

interface Props {
	title?: string;
}

const SideShare: React.FC<Props> = ({ title }) => {
	const { asPath } = useRouter();

	return (
		<div className={`${styles["side-share"]} elevate-2`}>
			<p>Compartir</p>
			<div className={styles["side-share__icons"]}>
				<ShareButton hoverEffect getPath={() => getFacebookShareLink(asPath)}>
					<SocialIcon social="facebook" />
				</ShareButton>
				<ShareButton
					hoverEffect
					getPath={() => getTwitterShareLink(asPath, title ?? "")}
				>
					<SocialIcon social="twitter" />
				</ShareButton>
			</div>
		</div>
	);
};

export default SideShare;
