'use strict';

/**
 * @ngdoc function
 * @name meanTraderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanTraderApp
 */
angular.module('meanTraderApp')
  .factory('tradesService', ['$http', function ($http) {

    var tradesService = {};

    tradesService.getTrades = function(){

      var promise = $http.get('/data/trades.json').then(function (response) {
        return response.data;
      });

      return promise;

    };

    return tradesService;

  }]);
