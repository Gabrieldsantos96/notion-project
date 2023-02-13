"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _expressRouteAdapter = require("main/adapters/express-route-adapter");
var _getArticleByID = require("main/factories/Article/getArticleByID");
var _default = router => {
  router.get('/getArticle/:id', (0, _expressRouteAdapter.adaptRoute)((0, _getArticleByID.makeSutGetArticleByIDController)()));
};
exports.default = _default;