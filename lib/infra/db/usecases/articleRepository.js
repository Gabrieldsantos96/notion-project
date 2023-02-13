"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleRepository = void 0;
var _mongoHelper = require("../helpers/mongo-helper");
var _mongodb = require("mongodb");
class ArticleRepository {
  async getArticles() {
    const articleCollection = await _mongoHelper.mongoHelper.getCollection('article');
    const articles = [];
    await articleCollection.find().forEach(e => {
      articles.push(_mongoHelper.mongoHelper.objMapper(e));
    });
    return articles;
  }
  async getArticleByID(articleId) {
    const articleCollection = await _mongoHelper.mongoHelper.getCollection('article');
    const filter = {
      _id: new _mongodb.ObjectId(articleId)
    };
    const article = await articleCollection.findOne(filter);
    return _mongoHelper.mongoHelper.objMapper(article);
  }
  async putArticleByID(articleId, data) {
    const articleCollection = await _mongoHelper.mongoHelper.getCollection('article');
    const filter = {
      _id: new _mongodb.ObjectId(articleId)
    };
    await articleCollection.updateOne(filter, {
      $set: {
        items: data
      }
    });
    const updatedArticle = await articleCollection.findOne(filter);
    return _mongoHelper.mongoHelper.objMapper(updatedArticle);
  }
}
exports.ArticleRepository = ArticleRepository;