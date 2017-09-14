// JavaScript Document
(function (){


	var mainController = function ($scope, $location) {

	   $scope.Experience=function(){
	   	$location.path("/Experience");
		};
		 $scope.acheivements=function(){
		 $location.path("/AboutMe");
	 };
		$scope.background=function(){
		 $location.path("/projects");
	 };
 };
mainController.$inject = ['$scope','$location'];

angular.module('F1FeederApp').controller('mainController', mainController);

}());
