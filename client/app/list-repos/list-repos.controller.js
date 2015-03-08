(function(){
  'use strict';

  angular
    .module('gitHubReposCtlgApp')
    .controller('ListReposCtrl', ListReposCtrl);

  ListReposCtrl.$inject = ['GithubRepository'];

  function ListReposCtrl(GithubRepository) {
    var vm = this;
    vm.repositories = [];
    vm.since = 0;

    vm.goToNextPage = goToNextPage;
    vm.goToPreviousPage = goToPreviousPage;

    initialization();

    function initialization() {
      getRepos(0);
    }

    function goToNextPage() {
      vm.since += vm.repositories.length;
      getRepos(vm.since);
    }

    function goToPreviousPage() {
      vm.since -= vm.repositories.length;
      vm.since =  (vm.since < 0) ? 0 : vm.since;
      getRepos(vm.since);
    }

    function getRepos(since) {
      GithubRepository.getAllRepos(since).then(
        function (response) {
          vm.repositories = response;
        },
        function (reason) {
          vm.NoData = true;
        });
    }
  }

})();
