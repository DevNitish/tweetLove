var app = require('../app.js')
var io = require('socket.io')();
var Twit = require('twit');
var CronJob = require('cron').CronJob;
var Tweet = require('../models/tweet.js');
var config=require('../configuration/config.js');// get twitter config

var T = new Twit(config)

module.exports = function(server) {
//socket work
    var io=require('socket.io').listen(server);

    io.on('connection', function (socket) {
        var addedUser = false;

      // when the client emits 'new tweet', this listens and executes
      socket.on('new tweet',function(data){
        doTweet(data);
      });
    });


    




    //corn schedular
    		var sec='';//range 0-59
    		var min='';//range 0-59
    		var hour='';//range 0-23
    		var dayofMonth='';//range 1-31
    		var month='';//range 1-11
    		var dayofWeek='';//range 0-6 0=Sunday,1=monday 
    //date time format  15:41:02-09-2016'

    function doTweet(tweet){
    			 sec=0;//range 0-59
        		 min=tweet.date.substr(3,2);//range 0-59
        		 hour=tweet.date.substr(0,2);//range 0-23
        		 dayofMonth=tweet.date.substr(6,2);//range 1-31
        		 month=tweet.date.substr(9,2)-1;//range 1-11
        		 dayofWeek=tweet.dayofWeek;//range 0-6 0=Sunday,1=monday

        		 var count=0;
        		 var tweetTime= ''+sec+' '+min+' '+hour+' '+dayofMonth+' '+month+' '+dayofWeek+'';
        		 console.log("data by client in function: ",tweet,tweetTime);

        		 var job = new CronJob(tweetTime, function() {


        		 	T.post('statuses/update', {'status':tweet.text}, function(err, data, response) {
        		 		if(err){
        		 			console.log("Something went wrong: ",err)
        		 		}else{
        		 			console.log("tweet Worked! ",data.text)
        		 		}
        		 	});	//end of tweet

        		 	console.log('Works fine!!!-->', count);
        		 	count++;
        		 }, function () {
        		 	/* This function is executed when the job stops */
        		 	console.log('Final!!!');
        		 },
        		 true /* Start the job right now */
        		 );
    }//end of doTweet
}