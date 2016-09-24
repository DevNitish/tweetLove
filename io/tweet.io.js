var Scheduler=require('../models/scheduler');
var Tweet=require('../models/tweet');


module.exports=function  (socket,io) {
	
	socket.on('save tweet',function(data){
		console.log("the tweet data is ---------->",data);
		Tweet.saveTweet(data,function(err,tweetData){
			console.log("reached to tweet io__> data------>",tweetData);
			if(!err){
				console.log("tweet done in IO tweetData is ", tweetData);
			}
		})
	})//end of tweetIO



}//end of module export