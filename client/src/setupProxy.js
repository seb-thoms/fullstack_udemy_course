const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/home", "/auth/google", "/logout"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};