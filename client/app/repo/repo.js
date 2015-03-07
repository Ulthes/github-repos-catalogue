'use strict';

angular.module('gitHubReposCtlgApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/repos/:owner/:repo', {
        templateUrl: 'app/repo/repo.html',
        controller: 'RepoCtrl'
      });
  });
