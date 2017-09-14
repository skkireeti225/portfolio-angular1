// JavaScript Document
(function (){


	var regController = function ($scope) {

	   $scope.regdata=function(){
	   	this.fname=$scope.fname;
		this.lname=$scope.lname;
		this.email=$scope.email;
		this.pwd=$scope.pwd;
		this.cpwd=$scope.cpwd;
		this.date=$scope.date;
		this.gen=$scope.gen;
		this.con=$scope.con;
		this.add1=$scope.add1;
		this.add2=$scope.add2;
	};
};
regController.$inject = ['$scope'];

angular.module('F1FeederApp').controller('regController', regController);

}());
