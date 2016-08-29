var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var authenticationHandler=require('./routes/auth.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',authenticationHandler);
//  app.post('/', function (req, res) {
//  	console.log("req." ,req.body.user)
//   res.send('Hello World!');
// });
app.use(express.static('public'));

//app.use(express.static('files'));


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
