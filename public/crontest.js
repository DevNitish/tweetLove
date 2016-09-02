var CronJob = require('cron').CronJob;
var count=0;
var sec=3;//range 0-59
var min=01;//range 0-59
var hour=12;//range 0-23
var dayofMonth=3;//range 1-31
var month=1;//range 1-11
var dayofWeek=3;//range 0-6 0=Sunday,1=monday 

var job = new CronJob('*/2 '+min+' 16 2 8 0', function() {
  console.log('Works fine!!!-->', count);
  count++;
  }, function () {
    /* This function is executed when the job stops */
console.log('Final!!!');
  },
  true /* Start the job right now */
);
