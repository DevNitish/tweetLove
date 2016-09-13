var Tweet=require('./tweet.js');
var mongooose=require("mongooose"),
Schema=mongooose.Schema;

var schedulerSchema= new Schema({

	dateTime:String,
	status:Boolean,
	error:String,
	createdTimeStamp:Date,
	tweet:[{ type: Schema.Types.ObjectId,
		ref: 'Tweet'}],
	tweetRepeat:[{
		dateTime:String,
		tweet:[{ type: Schema.Types.ObjectId,
        		ref: 'Tweet'}]
	}]
});

// database operation here


var Schedule= mongoose.model('Schedule',schedulerSchema,'Schedules');
module.exports=Schedule;

