"use strict";

var SetSms = require('../models/set-sms');

var SenderFactory = function SenderFactory() {
  return {
    run: function run() {
      SetSms.sendSms();
    }
  };
};

module.exports = SenderFactory();