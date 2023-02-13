"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoHelper = void 0;
var _mongodb = require("mongodb");
const mongoHelper = {
  client: null,
  url: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async connect(url) {
    this.url = url;
    this.client = await _mongodb.MongoClient.connect(url, {
      useUnifiedTopology: true
    });
  },
  async disconnect() {
    await this.client.close();
    this.client = null;
  },
  async getCollection(name) {
    if (!this.client) {
      await this.connect(this.url);
    }
    return this.client.db().collection(name);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objMapper(data) {
    const {
      _id,
      ...rest
    } = data;
    return {
      id: _id,
      ...rest
    };
  }
};
exports.mongoHelper = mongoHelper;