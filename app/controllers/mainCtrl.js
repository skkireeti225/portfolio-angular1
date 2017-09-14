// JavaScript Document
(function (){
		   var mainCtrl = function ($scope, $log, $window, $route) {
			 $window.scrollTo(0, 0);
       $scope.$route = $route;
    };

mainCtrl.$inject = ['$scope', '$log', '$window', '$route'];

angular.module('F1FeederApp').controller('mainCtrl', mainCtrl);

}());
