"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cors = void 0;
const cors = (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', '*');
  res.set('Access-Control-Allow-Headers', '*');
  next();
};
exports.cors = cors;