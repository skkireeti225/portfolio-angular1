// JavaScript Document
(function() {

		var F1FeederApp = angular.module('F1FeederApp', ['ngRoute']);

F1FeederApp.config(
	function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: './views/home1.html',
        controller: 'mainController',
				activetab: 'dashboard'
      }).
	   when('/Experience', {
        templateUrl: './views/list.html',
        controller: 'listController',
				activetab: 'Experience'
      }).
     when('/AboutMe', {
        templateUrl: './views/registration.html',
        controller: 'aboutCtrl',
				activetab: 'AboutMe'
      }).
			when('/projects', {
				 templateUrl: './views/piechart.html',
				 controller: 'static',
				 activetab: 'projects'
			 }).
			 when('/details', {
					templateUrl: './views/details.html',
					controller: 'detailsCtrl',
					activetab: 'details'
				}).

      otherwise({
        redirectTo: '/'

      });
  });

}());
