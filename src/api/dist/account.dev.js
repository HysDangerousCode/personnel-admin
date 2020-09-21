"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = Login;
exports.Register = Register;
exports.GetCode = GetCode;

var _request = _interopRequireDefault(require("../../src/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入拦截器

/*
 *登录接口
 */
function Login(data) {
  return _request["default"].request({
    url: "/login/",
    method: "post",
    data: data //请求类型为post时
    // params: data //请求类型为get时

  });
}
/*
 *注册接口
 */


function Register(data) {
  return _request["default"].request({
    url: "/register/",
    method: "post",
    data: data //请求类型为post时

  });
}
/*
 *获取验证码接口
 */


function GetCode(data) {
  return _request["default"].request({
    url: "/getSms/",
    method: "post",
    data: data //请求类型为post时

  });
}