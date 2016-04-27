angular.module('hangApp').config(function($stateProvider, $urlRouterProvider, $locationProvider){
    'use strict';

    // Enable HTML5 mode
    $locationProvider.html5Mode(true);

    // Unmatched urls redirect to /
    $urlRouterProvider.otherwise('/home');
    //
    // State definitions
    $stateProvider
        .state('home',{
            url: "/home",
            templateUrl:'features/example/templates/template.html',
            controller:'ExampleController as ec'
        })
        .state('wedding',{
            url: "/wedding",
            templateUrl:'features/wedding/templates/template.html',
            controller:'WeddingController as wc'
        });
});
