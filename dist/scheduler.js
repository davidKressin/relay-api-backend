"use strict";

var CronJob = require('cron').CronJob;

var sender = require('./controllers/sender');

var moment = require('moment');

var schedulerFactory = function schedulerFactory() {
  return {
    // cada 1 minuto se ejecuta esta función, que a su vez ejecuta la función notificationWorker
    start: function start() {
      new CronJob('00 * * * * *', function () {
        console.log('Running Send Notifications Worker for ' + moment().format());
        sender.run();
      }, null, true, '');
    }
  };
};

module.exports = schedulerFactory();