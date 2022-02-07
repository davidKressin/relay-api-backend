"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

require('dotenv').config();

app.set('port', 3000);
app.set('json spaces', 2); // middlewares

app.use((0, _morgan["default"])('dev')); //routes

app.use(_index["default"]);
var _default = app;
exports["default"] = _default;