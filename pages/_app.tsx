import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import "../components/Shared/Pagination/pagination-box.css";
import "../styles/globals.css";
import "../styles/article-content.css";
import "../styles/loading.css";
import "../styles/cookie-consent.css";
import MyCookieConsent from "../components/Shared/MyCookieConsent";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Partekatu</title>
				<meta property="og:title" content="Partekatu" key="title" />
				<meta name="description" content="Partekatu" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Component {...pageProps} />
			<MyCookieConsent />
		</>
	);
}

export default MyApp;
