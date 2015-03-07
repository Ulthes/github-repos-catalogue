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
            getRepo("sr", "tasks");
        }

        function getRepos() {
            GithubRepository.getAllRepos().then(
                function (response) {
                    vm.repositories = response;

                    console.log(response);
                },
                function (reason) {});
        }

        function getRepo(owner, repo) {
            GithubRepository.getRepo({owner: owner, repo: repo}).then(function(response){
            }, function(reason){
                
            })
        }
    }
})()