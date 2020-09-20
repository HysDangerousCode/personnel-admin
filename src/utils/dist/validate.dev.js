"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate_email = validate_email;
exports.validate_passwords = validate_passwords;
exports.reg_email = exports.validate_password = exports.reg_password = void 0;
// 正则验证类
// 密码验证
var reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
exports.reg_password = reg_password;
var validate_password = reg_password; // 邮箱验证

exports.validate_password = validate_password;
var reg_email = /^([a-zA-Z]|[0-9])(\w|\/-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; // 导出邮箱验证正则

exports.reg_email = reg_email;

function validate_email(value) {
  return reg_email.test(value);
} // 导出密码验证正则


function validate_passwords(value) {
  return reg_password.test(value);
}