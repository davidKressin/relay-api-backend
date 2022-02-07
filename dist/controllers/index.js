"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relayOn = exports.relayOff = exports.getIndex = void 0;

var sendSms = require('../send-sms.js');

var accountSid = process.env.ACCOUNT_SID;
var authToken = process.env.AUTH_TOKEN;

var client = require('twilio')('AC51e93bdc0ffb4de19d52c249bdca7084', '5030d5d11aa13aa7ef9e69f8988cc22c');

var getIndex = function getIndex(req, res) {
  res.send("mostrar botones");
};

exports.getIndex = getIndex;

var relayOn = function relayOn(req, res) {
  for (var i = 0; i < 3; i++) {
    client.messages.create({
      to: '+56921110057',
      from: '+15075754434',
      body: "ON"
    }).then(function (message) {
      console.log(message.sid);
    });
  }

  res.sendStatus(200);
};

exports.relayOn = relayOn;

var relayOff = function relayOff(req, res) {
  for (var i = 0; i < 3; i++) {
    client.messages.create({
      to: '+56921110057',
      from: '+15075754434',
      body: "OFF"
    }).then(function (message) {
      console.log(message.sid);
    });
  }

  res.sendStatus(200);
};

exports.relayOff = relayOff;