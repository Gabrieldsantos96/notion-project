"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badRequest = badRequest;
exports.serverError = serverError;
exports.success = success;
var _errors = require("presentation/errors");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function success(data) {
  return {
    statusCode: 200,
    body: data
  };
}
function badRequest(error) {
  return {
    statusCode: 400,
    body: error
  };
}
function serverError() {
  return {
    statusCode: 500,
    body: new _errors.ServerError()
  };
}