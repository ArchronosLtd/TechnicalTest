(function() {
  'use strict';

  angular.module('angular-ac').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    // TODO: where are the controllers?
    $stateProvider.state('activities', {
      url: '/',
      templateUrl: 'views/activities.html'
    }).state('activity_detail', {
      url: '/:id',
      templateUrl: 'views/activity_detail.html'
    });

    $urlRouterProvider.otherwise('/');
  }]);
})();