"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _bodyParser = require("../middlewares/body-parser");
var _cors = require("../middlewares/cors");
var _contentType = require("../middlewares/content-type");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _default = app => {
  app.use(_bodyParser.bodyParser);
  app.use(_cors.cors);
  app.use(_contentType.contentType);
};
exports.default = _default;