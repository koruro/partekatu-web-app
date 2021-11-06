import type { AppProps } from "next/app";
import "../components/Shared/Pagination/pagination-box.css";
import "../styles/globals.css";
import "../styles/article-content.css";
import "../styles/loading.css";
import "../styles/cookie-consent.css";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
