(function () {
    'use strict';

    angular
        .module('gitHubReposCtlgApp')
        .service('githubService', githubService);

    githubService.$inject = ['GithubRepository', '$q'];

    function githubService(GithubRepository, $q) {
        var service = {
            getRepoDetails: getRepoDetails
        }

        return service;

        function getRepoDetails(ownerAndRepoObj) {
            var deferred = $q.defer();
            var repoDetails;

            GithubRepository.getRepo(ownerAndRepoObj).then(
                function (response) {
                    repoDetails = {
                        name: response.name,
                        description: response.description,
                        size: response.size,
                        forks: response.forks,
                        created_at: response.created_at,
                        updated_at: response.updated_at
                    };
                    GithubRepository.getRepoEvents(ownerAndRepoObj).then(
                        function (response) {
                            repoDetails.events = response;
                            deferred.resolve(repoDetails);
                        },
                        function (reason) {
                            deferred.reject(reason);
                        })
                },
                function (reason) {
                    deferred.reject(reason)
                })
            return deferred.promise;
        };
    }

})()