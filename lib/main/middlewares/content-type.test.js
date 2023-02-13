"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _supertest = _interopRequireDefault(require("supertest"));
var _app = _interopRequireDefault(require("../config/app"));
describe('Content type middleware', () => {
  test('should return default content type as json', async () => {
    _app.default.get('/test_content', (req, res) => {
      res.send();
    });
    await (0, _supertest.default)(_app.default).get('/test_content').expect('content-type', /json/);
  });
  test('should return xml content-type when forced', async () => {
    _app.default.get('/test_content_xml', (req, res) => {
      res.type('xml');
      res.send();
    });
    await (0, _supertest.default)(_app.default).get('/test_content_xml').expect('content-type', /xml/);
  });
});