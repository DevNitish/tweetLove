var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var authenticationHandler=require('./routes/auth.js');
var Twit = require('twit');
var port=process.env.PORT || 8080;
var server = require('http').createServer(app);

var io=require('socket.io').listen(server);

server.listen(port, function () {
  console.log('Example app listening on port 8080!');
});


io.on('connection', function (socket) {
  var addedUser = false;

  // when the client emits 'new tweet', this listens and executes
 socket.on('new tweet',function(data){
	console.log("data by client: ",data);
		});
  });




app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',authenticationHandler);


var config=require('./configuration/config.js');
var T = new Twit(config);

//
//  tweet 'hello world!'
//
// var tweet={ status: 'Good morning fellas' };
// T.post('statuses/update', tweet, function(err, data, response) {
//   if(err){
//   	console.log("Something went wrong: ",err)
//   }else{
//   	console.log("Worked! ",data.text)
//   }
// });	



//  app.post('/', function (req, res) {
//  	console.log("req." ,req.body.user)
//   res.send('Hello World!');
// });


//app.use(express.static('files'));


