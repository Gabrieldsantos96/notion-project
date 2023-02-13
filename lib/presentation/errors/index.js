"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _invalidParamError = require("./invalidParamError");
Object.keys(_invalidParamError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _invalidParamError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _invalidParamError[key];
    }
  });
});
var _missingParamError = require("./missingParamError");
Object.keys(_missingParamError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _missingParamError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _missingParamError[key];
    }
  });
});
var _serverError = require("./serverError");
Object.keys(_serverError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _serverError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _serverError[key];
    }
  });
});