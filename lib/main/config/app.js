"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _middlewares = _interopRequireDefault(require("./middlewares"));
var _routes = _interopRequireDefault(require("./routes"));
const app = (0, _express.default)();
(0, _middlewares.default)(app);
(0, _routes.default)(app);
app.use(_express.default.json({
  limit: '50mb'
}));
app.use(_express.default.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));
var _default = app;
exports.default = _default;