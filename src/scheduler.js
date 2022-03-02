const CronJob = require('cron').CronJob;
const sender = require('./controllers/sender');
const moment = require('moment');

const schedulerFactory = function() {
  return {
    // cada 1 minuto se ejecuta esta función, que a su vez ejecuta la función notificationWorker
    start: function() {
      new CronJob('00 * * * * *', function() {
        console.log('Running Send Notifications Worker for ' +
          moment().format());
        sender.run();
      }, null, true, '');
    },
  };
};

module.exports = schedulerFactory();