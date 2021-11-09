import Document, { Html, Head, Main, NextScript } from "next/document";
import { IS_PRODUCTION } from "../utils/environment";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="author" content="Xabier Madorran, Ander Benito" />
					{IS_PRODUCTION ? null : <meta name="robots" content="noindex" />}
					{/* <link
						href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display:wght@500;700&display=swap"
						rel="stylesheet"
					/> */}
					{/* <script
						data-ad-client="ca-pub-8498524881106051"
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
					></script> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
