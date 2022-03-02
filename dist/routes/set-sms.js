"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _moment = _interopRequireDefault(require("moment"));

var _setSms = _interopRequireDefault(require("../models/set-sms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var momentTimeZone = require('moment-timezone');

var router = (0, _express.Router)();

var getTimesZones = function getTimesZones() {
  return momentTimeZone.tz.names();
}; // GET : /set-sms 


router.get('/', function (req, res) {
  _setSms["default"].find().then(function (smss) {
    res.json(smss);
  })["catch"](function (err) {
    console.error(err);
  }); // res.send('holaaaa')

}); // GET: /set-sms/create

router.get('/create', function (req, res) {
  var zones = getTimesZones();
  console.log(zones);
  res.json(zones);
}); // GET : /set-sms/:id 

router.get('/:id', function (req, res) {
  var id = req.params.id;

  _setSms["default"].findOne({
    _id: id
  }).then(function (sms) {
    var zones = getTimesZones();
    res.json({
      sms: sms,
      zones: zones
    });
  }); // res.send('holaaaa')

}); // POST: /set-sms

router.post('/', function (req, res) {
  var message = req.body.message;
  var phoneNumber = req.body.phoneNumber;
  var timeZone = req.body.timeZone; // const time = moment(req.body.time, 'MM-DD-YYYY hh:mma').tz("Chile/Continental");

  var time = _moment["default"].tz(req.body.time, 'DD-MM-YYYY hh:mma', timeZone); // console.log(req.body, time);


  var sms = new _setSms["default"]({
    message: message,
    phoneNumber: phoneNumber,
    timeZone: timeZone,
    time: time
  });
  console.log(sms.time);
  sms.save().then(function () {
    res.send("guardado");
  });
}); // GET: /set-sms/edit/:id

router.get('/edit/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);

  _setSms["default"].findOne({
    _id: id
  }).then(function (sms) {
    // const zones = getTimesZones();
    res.json({
      sms: sms
    });
  });
}); // POST: /set-sms/edit/:id

router.post('/edit/:id', function (req, res) {
  var id = req.params.id;
  var message = req.body.message;
  var phoneNumber = req.body.phoneNumber;
  var timeZone = req.body.timeZone;
  var time = (0, _moment["default"])(req.body.time, 'DD-MM-YYYY hh:mma').tz(timeZone);

  _setSms["default"].findOne({
    _id: id
  }).then(function (sms) {
    sms.message = message;
    sms.phoneNumber = phoneNumber;
    sms.timeZone = timeZone;
    sms.time = time;
    sms.save().then(function () {
      res.send('editado');
    });
  });
}); // DELETE: /set-sms/delete/:id

router.post('/delete/:id', function (req, res) {
  var id = req.params.id;

  _setSms["default"].remove({
    _id: id
  }).then(function () {
    res.send('eliminado');
  });
});
var _default = router;
exports["default"] = _default;