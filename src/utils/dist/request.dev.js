"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 请求拦截器
// 创建实例
var service = _axios["default"].create({
  baseURL: process.env.REACT_APP_API,
  // baseURL: "/devApi",
  timeout: 5000 // headers: { "X-Custom-Header": "foobar" }

}); // 请求拦截
// 添加请求拦截器


service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
}); // 响应拦截
// 添加响应拦截器

service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
}); // 导出拦截器

var _default = service;
exports["default"] = _default;