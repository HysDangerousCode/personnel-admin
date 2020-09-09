// 跨域配置
// Cross domain configuration
// интердоменная конфигурация
const { createProxyMiddleware } = require("http-proxy-middleware");
// 可配置多个跨域
module.exports = function(app) {
    app.use(createProxyMiddleware("/devApi", {
        target: "http://www.web-jshtml.cn/api/react", //配置要请求的服务器地址
        changeOrigin: true, //是否允许跨域
    }));
    // app.use(proxy("/manage/api", {
    //     target: "http://admin.com", //配置要请求的服务器地址以及详细目录
    //     changeOrigin: true, //是否允许跨域
    // }));
}