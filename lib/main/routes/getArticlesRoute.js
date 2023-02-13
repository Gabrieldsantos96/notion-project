"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _expressRouteAdapter = require("main/adapters/express-route-adapter");
var _getArticles = require("main/factories/Article/getArticles");
var _default = router => {
  router.get('/', (0, _expressRouteAdapter.adaptRoute)((0, _getArticles.makeSutGetArticles)()));
};
exports.default = _default;