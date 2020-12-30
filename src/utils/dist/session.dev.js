"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setToken = setToken;
exports.getToken = getToken;
// session
var tokenAdmin = "adminToken";

function setToken(value) {
  return sessionStorage.setItem(tokenAdmin, value);
}

function getToken() {
  return sessionStorage.getItem(tokenAdmin);
}