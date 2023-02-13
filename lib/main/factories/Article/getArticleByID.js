"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSutGetArticleByIDController = void 0;
var _getArticleByID = require("presentation/controllers/Article/getArticleByID");
var _log = require("decorators/log");
var _DBArticle = require("./DBArticle");
var _idValidatorAdapter = require("utils/idValidatorAdapter");
const makeSutGetArticleByIDController = () => {
  const validator = new _idValidatorAdapter.idValidator();
  const controller = new _getArticleByID.GetArticleByIDController((0, _DBArticle.makeSutDBArticle)(), validator);
  return new _log.LogControllerDecorator(controller);
};
exports.makeSutGetArticleByIDController = makeSutGetArticleByIDController;