(function(){
  'use strict';

  angular
    .module('gitHubReposCtlgApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(function ($locationProvider) {
      $locationProvider.html5Mode(true);
    });

})();
