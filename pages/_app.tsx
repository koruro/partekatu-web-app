import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
      `}
      </Script>
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8498524881106051"
      ></Script>
      <ErrorBoundary fallback={() => <ClientErrorContainer />}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
