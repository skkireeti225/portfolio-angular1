// JavaScript Document
(function (){
		   var listController = function ($scope,customerService,$log, $window) {
       var datas;
			 $window.scrollTo(0, 0);
	     function init() {
           $scope.datas = customerService.getCustomers();
        }
        init();
    };

listController.$inject = ['$scope','customerService','$log', '$window'];

angular.module('F1FeederApp').controller('listController', listController);

}());
