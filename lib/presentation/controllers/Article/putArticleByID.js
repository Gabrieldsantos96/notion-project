"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PutArticleController = void 0;
var _errors = require("presentation/errors");
var _helpers = require("presentation/helpers");
class PutArticleController {
  constructor(helper, validator) {
    this.idValidator = validator;
    this.db = helper;
  }
  async handle(httpRequest) {
    try {
      const {
        body,
        params: {
          id
        }
      } = httpRequest;
      const validator = this.idValidator.isValid(id);
      if (!validator) {
        return (0, _helpers.badRequest)(new _errors.InvalidParamError('id'));
      }
      const article = await this.db.putArticleByID(id, body);
      return (0, _helpers.success)(article);
    } catch {
      return (0, _helpers.serverError)();
    }
  }
}
exports.PutArticleController = PutArticleController;