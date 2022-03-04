"use strict";

var _app = _interopRequireDefault(require("./app.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_app["default"].get('port'), function () {
  console.log('server on port ', _app["default"].get('port'));
});

var user = "david";
var password = "davidignacio";
var dbname = "relay-app";
var uri = "mongodb+srv://".concat(user, ":").concat(password, "@clusterbootcamp.xtlf3.mongodb.net/").concat(dbname, "}?retryWrites=true&w=majority");

_mongoose["default"].connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("connectado a la db"))["catch"](function (e) {
  return console.error(e);
});

_mongoose["default"].Promise = Promise; // mongoose.Promise = ('bluebird');