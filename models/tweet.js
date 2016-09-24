var mongoose=require("mongoose"),
Schema=mongoose.Schema;

var TweetSchema= new Schema({

	text:String,
	fav:Boolean,
	tweetCount:Number,
	createdTimeStamp:Date,
	lastTweeted:Date
});


//
var TweetModel= mongoose.model('TweetSchema',TweetSchema);

TweetSchema.statics.saveTweet = function(text,dateTime,callback){
	var record= new TweetModel();
		record.text=text;
		record.fav=false;
		record.tweetCount=0;
		record.createdTimeStamp=new Date();
		record.lastTweeted=null;
	record.save(function(err){
		if(err){
			console.log("not able to save in DB ",err);
			callback(err,null);
		}else{
			callback(null,doc);
			console.log("data is save in DB doc is",doc);

		}
	})

}//end of save tweet



/* addLabel function is used to assign the label to
  the story from the project label list.
  StorySchema.statics.addLabel = function(storyId,labelId, callback) {
    this.findOneAndUpdate(
      { "_id" : storyId },
      { $push: { labelList : labelId
      }
    },
    {
      upsert: true,
      new:true
    }
  )
  .exec(function(err , doc) {
    if (err) {
      console.log(err);
      callback(err, null);
    }
    else {
      console.log(doc);
      callback(null, doc);
    }
  });
}*/
// database operation here


var Tweet= mongoose.model('Tweet',TweetSchema,'Tweets');
module.exports=Tweet;

