"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = Login;

var _request = _interopRequireDefault(require("../../src/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入拦截器

/*
 *登录接口
 */
function Login() {
  return _request["default"].request({
    url: "/login/",
    method: "post",
    // data, //请求类型为post时
    params: data //请求类型为get时

  });
}