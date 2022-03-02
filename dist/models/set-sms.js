"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _twilio = require("twilio");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var SetSmsSchema = new Schema({
  message: String,
  phoneNumber: String,
  timeZone: String,
  time: {
    type: Date,
    index: true
  }
});

SetSmsSchema.statics.sendSms = function (callback) {
  var searchDate = new Date();
  var now = (0, _momentTimezone["default"])().tz("Chile/Continental").format();

  var ahora = _momentTimezone["default"].tz(searchDate, "Chile/Continental");

  console.log(ahora);
  SetSms.find().then(function (smss) {
    smss = smss.filter(function (sms) {
      var date = new Date(sms.time); // let time = date.toISOString();

      date = (0, _momentTimezone["default"])(sms.time).tz(sms.timeZone); // let time = date.toISOString();

      console.log(date);
      return date.format() === ahora.format(); // Math.round(
      //     moment.duration(
      //       moment(date).tz(sms.timeZone).utc()
      //       .diff(moment(searchDate).utc())
      //     ).asMinutes()
      //   )  === "0";
    });
    console.log(smss.length);

    if (smss.length > 0) {
      console.log("se detecto un sms a esta hora");
      sendSms(smss);
    }
  });

  function sendSms(smss) {
    var client = require('twilio')("AC51e93bdc0ffb4de19d52c249bdca7084", "b7589c6a0f1d808d70c5c986927a0e92");

    smss.forEach(function (sms) {
      console.log(sms.message);
      var options = {
        to: "".concat(sms.phoneNumber),
        from: "+15075754434",
        body: "".concat(sms.message)
      };
      client.messages.create({
        to: "".concat(sms.phoneNumber),
        from: "+15075754434",
        body: "".concat(sms.message)
      }).then(function (message) {
        return console.log(message.body);
      })["catch"](function (err) {
        return console.error(err);
      }); // function(err, response){
      // if(err){
      // console.error(err);
      // }else{
      // console.log(`message ${sms.message} sent to ${sms.phoneNumber}`);
      // }
      // }
      // )
    });
  }
};

var SetSms = _mongoose["default"].model('setSms', SetSmsSchema);

module.exports = SetSms;