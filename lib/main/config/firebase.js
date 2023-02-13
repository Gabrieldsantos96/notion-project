"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.app = void 0;
var _app = require("firebase/app");
var _storage = require("firebase/storage");
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: 'AIzaSyCKnNsYk2bZORy8AGCXi42SXAeLVemv4xc',
  authDomain: 'uploads-d8a74.firebaseapp.com',
  projectId: 'uploads-d8a74',
  storageBucket: 'uploads-d8a74.appspot.com',
  messagingSenderId: '318570800196',
  appId: '1:318570800196:web:ad7748312b9c994c510811',
  measurementId: 'G-7C6S0WRW04'
};
const app = (0, _app.initializeApp)(firebaseConfig);
exports.app = app;
const storage = (0, _storage.getStorage)(app);
exports.storage = storage;