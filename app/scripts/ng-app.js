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
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('trades', {
        url: '/trades',
        templateUrl: 'views/trades/trades-list.html',
        controller: 'TradesCtrl'
      })
      .state('scratch', {
        url: '/scratch',
        templateUrl: 'views/scratch/accordion.html',
        controller: 'AccordionDemoCtrl'
      })
    ;

    $urlRouterProvider.otherwise('dashboard');

  }]);
