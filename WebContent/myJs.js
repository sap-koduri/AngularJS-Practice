/// <reference path="../⁨Users⁩/satyanarayanakondaparthi⁩/⁨Downloads/angular.js"/>

var myApp= angular.module("myModule", []);

var myController = function($scope){
	
	var technologies = [
		{name:"Java", likes:0, disLikes:0},
		{name:"JavaScript", likes:0, disLikes:0},
		{name:"HTML5", likes:0, disLikes:0},
		{name:"AngularJS", likes:0, disLikes:0},
		{name:"CSS", likes:0, disLikes:0}
	];
	
	
	var incLikes = function(technologie){
		technologie.likes ++;
	};
	var incDisLikes = function(technologie){
		technologie.disLikes ++;
	};
	
	$scope.technologies = technologies;
	$scope.incLikes = incLikes;
	$scope.incDisLikes = incDisLikes;
};

myApp.controller("myController", myController);



var myFilterController = function($scope){
	
	var employees = [
		{name:"Sap", 		doj: new Date("November 12, 2010"), gender:"male", 		salary:1000.00},
		{name:"Giri", 		doj: new Date("November 12, 2010"), gender:"female", 	salary:1000.00},
		{name:"Srinu", 		doj: new Date("November 12, 2010"), gender:"male", 		salary:1000.00},
		{name:"Thirupathi", doj: new Date("November 12, 2010"), gender:"female", 	salary:1000.00},
		{name:"Venkat", 	doj: new Date("November 12, 2010"), gender:"male", 		salary:1000.00}
	];
	
	$scope.employees = employees;
	$scope.reverseSort = false;
	$scope.sortColumn = "name";
	
	$scope.sortData = function(columnName){
		$scope.reverseSort = ($scope.sortColumn = columnName)? !$scope.revertSort : false;
		$scope.sortColumn = columName;
	};
	$scope.getSortClass = function(column){
		if($scope.sortColumn == column){
			return $scope.reveseSort ? 'arrow-down' : 'arrow-up';
		}
	};
	
};

myApp.controller("myFilterController", myFilterController);


