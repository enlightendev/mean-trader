'use strict';

/**
 * @ngdoc function
 * @name meanTraderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanTraderApp
 */
angular.module('meanTraderApp')

  /**
   *
   */
  .controller('MainCtrl', function ($scope) {

    $scope.appName = 'NG Trader';

  })


  .controller('DashboardCtrl', function ($scope, tradesService) {

  })

  .controller('TradesCtrl', function ($scope, $stateParams, tradesService) {

    tradesService.getTrades().then(function (response) {
      $scope.trades = response;
    });

    $scope.increaseSpread = function (trade) {
      trade.spreadWidth += 1;
    };

    $scope.addTrade = function () {
      $scope.trades.push(
        {
          broker: $scope.broker,
          ticker: $scope.ticker,
          dte: $scope.dte,
          spreadWidth: 0
        }
      );
    };

  })

  .controller('AccordionDemoCtrl', function ($scope) {

    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false,
      open: true
    };

    $scope.toggleStatus = function(){
      $scope.status.open = !$scope.status.open
      alert('toggle:' + $scope.status.open);
    }

  })
;
