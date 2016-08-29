var express= require('express');
router=express.Router();
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.bodyParser());
var loginStatus="";
router.post('/login', function(req,res,next){
	//console.log("LOGIN REQUEST FOR ",req);
	var name="linknitish";
	var passcode='helloworld';
	if((req.body.name==name)&&(req.body.password==passcode)){
	console.log("Success REQ:-------------->", req.body);
	    res.redirect('/index.html');
	    res.send({status:"SUCCESS"});

	}
	else{
			console.log("FAIL else 	REQ:-------------->", req.body);

			res.send({ status: "PASSWORD_ERR"});
		}
});

module.exports = router;
