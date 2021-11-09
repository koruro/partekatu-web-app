const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
	baseUrl: "https://partekatu.com",
	pagesDirectory: path.resolve(".next", "server", "pages"),
	targetDirectory: path.resolve("public"),
	sitemapFilename: "sitemap.xml",
	ignoredExtensions: ["js", "map", "json", "xml", "png", "css", "jpeg", "icon"],
	ignoredPaths: ["404", "500", "favicon", "index", "[slug]", "[category]"],
	extraPaths: ["/", "/articulos"],
});
