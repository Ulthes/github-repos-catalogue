(function(){
  'use strict';
  angular
    .module('GitHubReposCtlg.ListRepos')
    .config(config);

  function config($routeProvider) {
    $routeProvider.when('/repos', {
      templateUrl: 'app/list-repos/list-repos.html',
      controller: 'ListReposCtrl',
      controllerAs: 'vm'
    });
  }

})();
