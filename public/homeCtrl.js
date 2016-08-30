// Code goes here
var myApp=angular.module('myApp',['ngMaterial','ui.bootstrap']);
myApp.controller('myCtrl',['$scope', function($scope){
  
  $scope.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
    var index = Math.floor(Math.random() * $dates.length);
    $dates[index].selectable = false;
}
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
    "tweet": "manninggoff@kinetica.com",
    "date": "Fri Mar 11 2005 06:10:02 GMT+0530 (India Standard Time)",
    "status": true
  },
  {
    "_id": "57be92fae3b827fac6954afe",
    "tweet": "manninggoff@kinetica.com",
    "date": "Mon Dec 21 1970 23:28:18 GMT+0530 (India Standard Time)",
    "status": false
  },
  {
    "_id": "57be92fa07db4cca80f2b7f0",
    "tweet": "manninggoff@kinetica.com",
    "date": "Fri Jun 26 1992 10:40:00 GMT+0530 (India Standard Time)",
    "status": true
  },
  {
    "_id": "57be92fa3f61f5b312da43f1",
    "tweet": "manninggoff@kinetica.com",
    "date": "Sun May 16 1982 10:48:26 GMT+0530 (India Standard Time)",
    "status": true
  },
  {
    "_id": "57be92fa0b1b25b5d7e6932a",
    "tweet": "manninggoff@kinetica.com",
    "date": "Sat Feb 06 1982 05:17:51 GMT+0530 (India Standard Time)",
    "status": false
  },
  {
    "_id": "57be92fabd819d9906d55b1a",
    "tweet": "manninggoff@kinetica.com",
    "date": "Wed Feb 24 2016 00:18:36 GMT+0530 (India Standard Time)",
    "status": true  
  },
  {
    "_id": "57be92fa1812a66324551ea9",
    "tweet": "manninggoff@kinetica.com",
    "date": "Sun Jul 24 2016 07:46:32 GMT+0530 (India Standard Time)",
    "status": true
  }
];


}])

