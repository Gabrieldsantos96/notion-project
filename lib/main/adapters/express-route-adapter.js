"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptRoute = void 0;
const adaptRoute = controller => {
  return async (req, res) => {
    const httpRequest = {
      ...(req.params && {
        params: req.params
      }),
      ...(req.body && {
        body: req.body
      })
    };
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
exports.adaptRoute = adaptRoute;