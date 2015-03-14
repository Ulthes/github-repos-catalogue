(function(){
  'use strict';

  angular
    .module('gitHubReposCtlgApp')
    .config(function ($locationProvider) {
      $locationProvider.html5Mode(true);
    });

})();
