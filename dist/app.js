"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _routes = _interopRequireDefault(require("./routes"));

var _setSms = _interopRequireDefault(require("./routes/set-sms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bodyParser = require('body-parser');

var scheduler = require('./scheduler');

var app = (0, _express["default"])();

require('dotenv').config();

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); // middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(_express["default"].json()); // app.locals.moment = moment;
//routes

app.use('/', _routes["default"]);
app.use('/set-sms', _setSms["default"]);
scheduler.start();
var _default = app;
exports["default"] = _default;