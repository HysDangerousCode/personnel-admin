"use strict";

// 跨域配置
// Cross domain configuration
// интердоменная конфигурация
var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware; // 可配置多个跨域


module.exports = function (app) {
  app.use(createProxyMiddleware("/devApi", {
    target: process.env.REACT_APP_BASE_URL,
    //配置要请求的服务器地址
    changeOrigin: true,
    //是否允许跨域
    pathRewrite: {
      "^/devApi": ""
    }
  })); // http://localhost:3000/devApi/login/
  // app.use(proxy("/manage/api", {
  //     target: "http://admin.com", //配置要请求的服务器地址以及详细目录
  //     changeOrigin: true, //是否允许跨域
  // }));
};