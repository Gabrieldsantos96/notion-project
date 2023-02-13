"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogControllerDecorator = void 0;
class LogControllerDecorator {
  constructor(controller) {
    this.controller = controller;
  }
  async handle(httpReq) {
    const httpResponse = await this.controller.handle(httpReq);
    if (httpResponse.statusCode === 500) {
      //
    }
    return httpResponse;
  }
}
exports.LogControllerDecorator = LogControllerDecorator;