'use strict';

angular.module('gitHubReposCtlgApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
    'ngAnimate',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });