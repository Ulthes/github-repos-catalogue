(function () {
    'use strict';



    angular
        .module('gitHubReposCtlgApp')
        .controller('ListReposCtrl', ListReposCtrl);

    ListReposCtrl.$inject = ['GithubRepository'];

    function ListReposCtrl(GithubRepository) {
        var vm = this;
        vm.repositories = [];

        initialization();

        function initialization() {
            getRepos();
        }

        function getRepos() {
            GithubRepository.getAllRepos().then(
                function (response) {
                    vm.repositories = response;
                },
                function (reason) {
                });
        }
    }
})()