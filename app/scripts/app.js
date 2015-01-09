'use strict';

/**
 * @ngdoc overview
 * @name meanTraderApp
 * @description
 * # meanTraderApp
 *
 * Main module of the application.
 */
angular
  .module('meanTraderApp', [
    'ngResource','ui.router','smart-table'
  ])

  .config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });

    $urlRouterProvider.otherwise('home');

  }]);
