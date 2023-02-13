"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _supertest = _interopRequireDefault(require("supertest"));
var _app = _interopRequireDefault(require("../config/app"));
describe('Body parser middleware', () => {
  test('should parse body as json ', async () => {
    _app.default.post('/test_body_parser', (req, res) => {
      res.send(req.body);
    });
    await (0, _supertest.default)(_app.default).post('/test_body_parser').send({
      name: 'Gabriel'
    }).expect({
      name: 'Gabriel'
    });
  });
});