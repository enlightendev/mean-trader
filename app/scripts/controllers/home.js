'use strict';

/**
 * @ngdoc function
 * @name meanTraderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanTraderApp
 */
angular.module('meanTraderApp')
  .controller('HomeCtrl', function ($scope, tradesService) {

    tradesService.getTrades().then(function(response){
      $scope.trades = response;
    });

    $scope.addTrade = function() {
      $scope.trades.push(
        {
          broker: $scope.broker,
          ticker: $scope.ticker,
          spread_width: 0
        }
      );
    };

    $scope.increaseSpread = function(trade){
      trade.spread_width += 1;
    };

  });
