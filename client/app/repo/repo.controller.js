(function(){
  'use strict';

  angular
    .module('GitHubReposCtlg.Repo')
    .controller('RepoCtrl', RepoCtrl);

  RepoCtrl.$inject = ['githubService', '$routeParams', '$location'];

  function RepoCtrl(githubService, $routeParams, $location) {
    var vm = this;
    vm.RepoDetails;

    getRepo($routeParams);

    function getRepo(repoAndOwnerObj) {
      githubService.getRepoDetails({
        owner: repoAndOwnerObj.owner,
        repo: repoAndOwnerObj.repo
      }).then(function (response) {
        vm.RepoDetails = response;
      }, function (reason) {
          vm.NoData = true;
      })
    }
  }

})();
