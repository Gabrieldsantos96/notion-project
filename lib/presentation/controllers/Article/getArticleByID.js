"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetArticleByIDController = void 0;
var _errors = require("presentation/errors");
var _helpers = require("presentation/helpers");
class GetArticleByIDController {
  constructor(helper, idValidator) {
    this.db = helper;
    this.idValidator = idValidator;
  }
  async handle(httpRequest) {
    try {
      const {
        params: {
          id
        }
      } = httpRequest;
      const validator = this.idValidator.isValid(id);
      if (!validator) {
        return (0, _helpers.badRequest)(new _errors.InvalidParamError('id'));
      }
      const article = await this.db.getArticleByID(id);
      return (0, _helpers.success)(article);
    } catch {
      return (0, _helpers.serverError)();
    }
  }
}
exports.GetArticleByIDController = GetArticleByIDController;