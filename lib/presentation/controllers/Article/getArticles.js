"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllArticlesController = void 0;
var _helpers = require("presentation/helpers");
class GetAllArticlesController {
  constructor(helper) {
    this.db = helper;
  }
  async handle() {
    try {
      const articles = await this.db.getArticles();
      return (0, _helpers.success)(articles);
    } catch {
      return (0, _helpers.serverError)();
    }
  }
}
exports.GetAllArticlesController = GetAllArticlesController;