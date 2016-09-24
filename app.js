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


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',authenticationHandler);




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


