import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import MyCookieConsent from "../components/Shared/MyCookieConsent";
import "../components/Shared/Pagination/pagination-box.css";
import "../styles/globals.css";
import "../styles/article-content.css";
import "../styles/loading.css";
import "../styles/cookie-consent.css";
import "../styles/ads.css";
import ErrorBoundary from "../components/error/ErrorBoundary";
import ClientErrorContainer from "../containers/Error/ClientErrorContainer";

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
      <Script strategy="afterInteractive" id="gtag-script">
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
				`}
      </Script>
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8498524881106051"
      ></Script>
      <ErrorBoundary fallback={() => <ClientErrorContainer />}>
        <Component {...pageProps} />
        <MyCookieConsent />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
