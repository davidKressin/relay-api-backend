const SetSms = require('../models/set-sms');

const SenderFactory = function() {
  return {
    run: function() {
      SetSms.sendSms();
    },
  };
};

module.exports = SenderFactory();
