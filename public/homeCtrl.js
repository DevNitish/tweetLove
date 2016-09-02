// Code goes here
var tweetApp=angular.module('tweetApp',['ngMaterial','ui.bootstrap']);
tweetApp.controller('myCtrl',['$scope','$log','$http','$rootScope','$window','$location','$timeout','$q','uibDateParser','Socket', function($scope,$log,$http,$rootScope,$window,$location,$timeout,$q,uibDateParser,Socket){
  //main work starts
  var socket = Socket($scope);
  //this is for datepicker
$scope.format = 'dd/MM/yyyy';
  $scope.date = new Date();
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    console.log("the min date:", $scope.inlineOptions.minDate)
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };


  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };



  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
  //datepicker ends
  $scope.tweetTime='';
  $scope.$watchGroup(['dt','mytime'],function(newVal,oldVal){
  $scope.tweetTime=newVal[0].toString().substr(0,15)+newVal[1].toString().substr(15);
  });

  //this is time picker
    $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    console.log($scope.dt.toString()+" <---date and time--> "+ $scope.mytime.toString()+ "length "+$scope.mytime.toString().substr(0,15));
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
  //timepicker ends

    //save the tweet
    $scope.myTweet=[];
    $tempTweet="";
  $scope.saveTweet=function(text){
    var obj= {"_id": "57be92fa9f034b7eef6145fc",
              "text": text,
              "date": $scope.tweetTime,
              "status": false
            };
   socket.emit('new tweet',obj);

    $scope.myTweet.push(obj);
     $tempTweet="";
  console.log("---->myTweet",$scope.myTweet);

  }
   //save the tweet ends
  //main work ends
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
//datetime stuff
  $scope.hello="helloworld";
  $scope.myTweet=[
  {
    "_id": "57be92fa9f034b7eef6145fc",
    "text": "manninggoff@kinetica.com",
    "date": "Fri Mar 11 2005 06:10:02 GMT+0530 (India Standard Time)",
    "status": true
  },
  {
    "_id": "57be92fae3b827fac6954afe",
    "text": "manninggoff@kinetica.com",
    "date": "Mon Dec 21 1970 23:28:18 GMT+0530 (India Standard Time)",
    "status": true
  },
  {
    "_id": "57be92fa07db4cca80f2b7f0",
    "text": "manninggoff@kinetica.com",
    "date": "Fri Jun 26 1992 10:40:00 GMT+0530 (India Standard Time)",
    "status": true
  },
  {
    "_id": "57be92fa3f61f5b312da43f1",
    "text": "manninggoff@kinetica.com",
    "date": "Sun May 16 1982 10:48:26 GMT+0530 (India Standard Time)",
    "status": true
  },
  {
    "_id": "57be92fa0b1b25b5d7e6932a",
    "text": "manninggoff@kinetica.com",
    "date": "Sat Feb 06 1982 05:17:51 GMT+0530 (India Standard Time)",
    "status": true
  },
  {
    "_id": "57be92fabd819d9906d55b1a",
    "text": "manninggoff@kinetica.com",
    "date": "Wed Feb 24 2016 00:18:36 GMT+0530 (India Standard Time)",
    "status": true  
  },
  {
    "_id": "57be92fa1812a66324551ea9",
    "text": "manninggoff@kinetica.com",
    "date": "Sun Jul 24 2016 07:46:32 GMT+0530 (India Standard Time)",
    "status": true
  }
];


}])

