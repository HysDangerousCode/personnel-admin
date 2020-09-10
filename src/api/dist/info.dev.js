"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoList = infoList;
exports.infoDetailed = infoDetailed;

var _request = _interopRequireDefault(require("../../src/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入拦截器

/*
 *信息列表接口
 */
function infoList(data) {
  return _request["default"].request({
    url: "/infoList/",
    method: "post",
    data: data //请求类型为post时
    // params: data //请求类型为get时

  });
}
/*
 *信息详情接口
 */


function infoDetailed() {
  return _request["default"].request({
    url: "/infoDetailed/",
    method: "post",
    data: "data" //请求类型为post时
    // params: data //请求类型为get时

  });
}