"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _supertest = _interopRequireDefault(require("supertest"));
var _app = _interopRequireDefault(require("../config/app"));
describe('CORS middleware', () => {
  test('should enable cors ', async () => {
    _app.default.get('/test_cors', (req, res) => {
      res.send();
    });
    await (0, _supertest.default)(_app.default).get('/test_cors').expect('access-control-allow-origin', '*').expect('access-control-allow-methods', '*').expect('access-control-allow-header', '*');
  });
});