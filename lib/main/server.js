"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoHelper = require("infra/db/helpers/mongo-helper");
var _env = _interopRequireDefault(require("main/config/env"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
_mongoHelper.mongoHelper.connect(_env.default.mongoUrl).then(async () => {
  const app = (await Promise.resolve().then(() => _interopRequireWildcard(require('main/config/app')))).default;
  app.listen(_env.default.port, () => console.log(`Server is running at locahost:${_env.default.port}`));
}).catch(console.error);