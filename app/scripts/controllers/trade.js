'use strict';

/**
 * @ngdoc function
 * @name meanTraderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanTraderApp
 */
angular.module('meanTraderApp')
  .controller('TradeCtrl', function ($scope, $stateParams, tradesService) {

    $scope.tradeId = $stateParams.id;

    tradesService.getTrades().then(function(response){
      $scope.trade = response[$stateParams.id];
    });



  });
