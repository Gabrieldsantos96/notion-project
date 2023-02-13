"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeSutPutArticleByID = void 0;
var _putArticleByID = require("presentation/controllers/Article/putArticleByID");
var _log = require("decorators/log");
var _DBArticle = require("./DBArticle");
var _idValidatorAdapter = require("utils/idValidatorAdapter");
const MakeSutPutArticleByID = () => {
  const validator = new _idValidatorAdapter.idValidator();
  const controller = new _putArticleByID.PutArticleController((0, _DBArticle.makeSutDBArticle)(), validator);
  return new _log.LogControllerDecorator(controller);
};
exports.MakeSutPutArticleByID = MakeSutPutArticleByID;