"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate_password = void 0;
// 正则验证类
// 密码验证
var validate_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
exports.validate_password = validate_password;