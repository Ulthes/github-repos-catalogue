(function () {
    'use strict';



    angular
        .module('gitHubReposCtlgApp')
        .controller('ListReposCtrl', ListReposCtrl);

    ListReposCtrl.$inject = ['GithubRepository'];

    function ListReposCtrl(GithubRepository) {
        var vm = this;
        vm.repositories = [];
        vm.since = 0;
        
        vm.goToNexPage = goToNextPage;
        vm.goToPreviousPage = goToPreviousPage;
        
        initialization();

        function initialization() {
            getRepos(0);
        }
        
        function goToNextPage(){
            getRepos(vm.since + vm.repositories.length);
        }
        
        function goToPreviousPage(){
            var difference = vm.since - vm.repositories.length;
            if (difference <= 0) {
                vm.since = 0;
            }
            console.log(difference);
            getRepos(difference >= 0 ? difference : 0);
        }

        function getRepos(since) {
            GithubRepository.getAllRepos(since).then(
                function (response) {
                    vm.repositories = response;
                    vm.since += vm.repositories.length;
                },
                function (reason) {});
        } 
    }
})()