require('angular');
require('angular-material');
require('angular-ui-router');
require('./components/cities/cities.js');
require('./components/city/city.js');

var app = angular.module('anp', ['ui.router', 'ngMaterial', 'anp.cities', 'anp.city']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('cities', {
      url: '/',
      views: {
        '': {
          templateUrl: 'components/cities/cities.html'
        },
        'header@cities': {
          templateUrl: 'shared/header/header.html'
        }
      }
    })
    .state('city', {
      url: '/cities/:cityId',
      views: {
        '': {
          templateUrl: 'components/city/city.html'
        },
        'header@city': {
          templateUrl: 'shared/header/header.html'
        }
      }
    });
});
