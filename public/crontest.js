var CronJob = require('cron').CronJob;
var count=0;
var sec=3;//range 0-59
var min=51;//range 0-59
var hour=12;//range 0-23
var dayofMonth=3;//range 1-31
var month=1;//range 1-11
var dayofWeek=3;//range 0-6 0=Sunday,1=monday 

var job = new CronJob('* '+min+' 16 31 7 3', function() {
  console.log('Works fine!!!-->', count);
  count++;
  }, function () {
    /* This function is executed when the job stops */
console.log('Final!!!');
  },
  true /* Start the job right now */
);
