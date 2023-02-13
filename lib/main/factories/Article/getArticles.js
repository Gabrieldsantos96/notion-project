"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSutGetArticles = void 0;
var _getArticles = require("presentation/controllers/Article/getArticles");
var _log = require("decorators/log");
var _DBArticle = require("./DBArticle");
const makeSutGetArticles = () => {
  const controller = new _getArticles.GetAllArticlesController((0, _DBArticle.makeSutDBArticle)());
  return new _log.LogControllerDecorator(controller);
};
exports.makeSutGetArticles = makeSutGetArticles;