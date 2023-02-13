"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/node-api',
  port: process.env.PORT || 5050
};
exports.default = _default;