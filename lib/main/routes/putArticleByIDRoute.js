"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _expressRouteAdapter = require("main/adapters/express-route-adapter");
var _putArticleByID = require("main/factories/Article/putArticleByID");
var _default = router => {
  router.put('/updateArticle/:id', (0, _expressRouteAdapter.adaptRoute)((0, _putArticleByID.MakeSutPutArticleByID)()));
};
exports.default = _default;