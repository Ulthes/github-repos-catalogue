(function(){
  'use strict';

  angular
    .module('GitHubReposCtlg.Repo')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/repos/:owner/:repo', {
        templateUrl: 'app/repo/repo.html',
        controller: 'RepoCtrl',
        controllerAs: 'vm'
      });
  }

})();
