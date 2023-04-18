const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/play",
		createProxyMiddleware({
			target: "http://10.35.60.33:1985",
			changeOrigin: true,
		})
	);

	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://10.35.60.136:32119",
			changeOrigin: true,
		})
	);
	app.use(
		"/gw",
		createProxyMiddleware({
			target: "http://10.35.60.136:32119",
			changeOrigin: true,
		})
	);
};
