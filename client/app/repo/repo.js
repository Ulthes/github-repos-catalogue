(function(){
  'use strict';

  angular
    .module('gitHubReposCtlgApp')
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
