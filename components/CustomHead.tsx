import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL } from "../utils/constants";

const DEFAULT_IMG_URL =
	"https://koruro.s3-sa-east-1.amazonaws.com/Full_Logo_1080_5835b47b57.png";

interface Props {
	title: string;
	metaTitle?: string;
	metaDesc?: string;
	imgUrl?: string;
	noIndex?: boolean;
	keywords?: string[];
}

const CustomHead: React.FC<Props> = ({
	title,
	metaDesc,
	metaTitle,
	imgUrl,
	noIndex,
	keywords,
}) => {
	const { asPath } = useRouter();
	return (
		<Head>
			<title>{title}</title>
			{metaTitle && <meta property="title" content={metaTitle} key="title" />}
			{metaTitle && (
				<meta property="og:title" content={metaTitle} key="og:title" />
			)}
			{metaDesc && (
				<meta name="description" content={metaDesc} key="description" />
			)}
			{keywords && <meta name="keywords" content={keywords.join(", ")} />}
			<meta property="image" content={imgUrl ?? DEFAULT_IMG_URL} key="image" />
			<meta
				property="og:image"
				content={imgUrl ?? DEFAULT_IMG_URL}
				key="og:image"
			/>
			<link rel="canonical" href={`${SITE_URL}${asPath}`} />
			{noIndex && <meta name="robots" content="noindex" />}
		</Head>
	);
};

export default CustomHead;
