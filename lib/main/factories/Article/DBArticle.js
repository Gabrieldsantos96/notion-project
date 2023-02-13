"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSutDBArticle = void 0;
var _articles = require("data/usecases/articles");
var _articleRepository = require("infra/db/usecases/articleRepository");
const makeSutDBArticle = () => {
  const repository = new _articleRepository.ArticleRepository();
  return new _articles.DBArticle(repository);
};
exports.makeSutDBArticle = makeSutDBArticle;