"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidParamError = void 0;
class InvalidParamError extends Error {
  constructor(param) {
    super(`Invalid param: ${param}`);
    this.name = `Invalid param: ${param}`;
  }
}
exports.InvalidParamError = InvalidParamError;