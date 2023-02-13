"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissingParamError = void 0;
class MissingParamError extends Error {
  constructor(param) {
    super(`Missing param: ${param}`);
    this.name = `Missing param: ${param}`;
  }
}
exports.MissingParamError = MissingParamError;