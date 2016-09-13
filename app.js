var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var authenticationHandler=require('./routes/auth.js');
var Twit = require('twit');
var CronJob = require('cron').CronJob;
var config=require('./configuration/config.js');// get twitter config


//connect to db
var mongoose=require('mongoose');
var db=mongoose.connect('mongodb://tweetAdmin:admin@ds031845.mlab.com:31845/tweetlove');

//to run server
var port=process.env.PORT || 8080;
var server = require('http').createServer(app);

var io=require('socket.io').listen(server);
var T = new Twit(config);

//start the server
server.listen(port, function () {
	console.log('Example app listening on port 8080!');
});


//socket work
io.on('connection', function (socket) {
	var addedUser = false;

  // when the client emits 'new tweet', this listens and executes
  socket.on('new tweet',function(data){
  	doTweet(data);
  });
});




app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',authenticationHandler);

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




//*********from fragile app.js************** 
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//production error handler
//no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
   res.render('error', {
   message: err.message,
    error: {}
 });
});

module.exports = app;

//  tweet 'hello world!'





//  app.post('/', function (req, res) {
//  	console.log("req." ,req.body.user)
//   res.send('Hello World!');
// });


//app.use(express.static('files'));


