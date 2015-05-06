angular.module('hangApp').config(function($stateProvider, $urlRouterProvider, $locationProvider){
    'use strict';

    // Enable HTML5 mode
    $locationProvider.html5Mode(true);

    // Unmatched urls redirect to /
    $urlRouterProvider.otherwise('/');
    //
    // State definitions
    $stateProvider
        .state('example',{
            url: "/",
            templateUrl:'features/example/templates/template.html',
            controller:'ExampleController as ec'
        });
});
