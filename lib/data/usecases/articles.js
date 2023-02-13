"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DBArticle = void 0;
class DBArticle {
  constructor(articleRepository) {
    this.articleRepository = articleRepository;
  }
  async getArticles() {
    const response = await this.articleRepository.getArticles();
    return new Promise(resolve => resolve(response));
  }
  async getArticleByID(id) {
    const response = await this.articleRepository.getArticleByID(id);
    return new Promise(resolve => resolve(response));
  }
  async putArticleByID(articleId, data) {
    const response = this.articleRepository.putArticleByID(articleId, data);
    return new Promise(resolve => resolve(response));
  }
}
exports.DBArticle = DBArticle;