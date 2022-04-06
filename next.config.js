/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
	reactStrictMode: true,
	images: {
		domains: ["images.unsplash.com", "res.cloudinary.com"],
	},
};

const sentryWebpackPluginOptions = {
	silent: true, // Suppresses all logs
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = moduleExports;

// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
