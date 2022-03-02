"use strict";

var _app = _interopRequireDefault(require("./app.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_app["default"].get('port'), function () {
  console.log('server on port ', _app["default"].get('port'));
});

_mongoose["default"].connect('mongodb://127.0.0.1:27017/relay-app', {
  useMongoClient: true
}).then(console.log("connectado a la db"));

_mongoose["default"].Promise = Promise; // mongoose.Promise = ('bluebird');