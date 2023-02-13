"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.idValidator = void 0;
class idValidator {
  isValid(id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return true;
    } else {
      false;
    }
  }
}
exports.idValidator = idValidator;