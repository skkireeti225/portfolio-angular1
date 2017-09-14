// JavaScript Document
(function (){
		   var aboutCtrl = function ($scope, $log, $window) {
			 $window.scrollTo(0, 0);
    };

aboutCtrl.$inject = ['$scope', '$log', '$window'];

angular.module('F1FeederApp').controller('aboutCtrl', aboutCtrl);

}());
