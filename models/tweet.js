var mongooose=require("mongooose"),
Schema=mongooose.Schema;

var tweetSchema= new Schema({

	text:String,
	fav:Boolean,
	tweetCount:Number,
	createdTimeStamp:Date,
	lastTweeted:Date
});

// database operation here


var Tweet= mongoose.model('Tweet',tweetSchema,'Tweets');
module.exports=Tweet;

