"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _putArticleByID = require("./putArticleByID");
Object.keys(_putArticleByID).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _putArticleByID[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _putArticleByID[key];
    }
  });
});
var _getArticles = require("./getArticles");
Object.keys(_getArticles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getArticles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getArticles[key];
    }
  });
});
var _getArticleByID = require("./getArticleByID");
Object.keys(_getArticleByID).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getArticleByID[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getArticleByID[key];
    }
  });
});