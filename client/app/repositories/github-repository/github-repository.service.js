(function () {
    'use strict';

    angular
        .module('gitHubReposCtlgApp')
        .service('GithubRepository', GithubRepository);

    GithubRepository.$inject = ['$http', '$q'];

    function GithubRepository($http, $q) {
        var service = {
            getAllRepos: getAllRepos,
            getRepo: getRepo
        }

        return service;


        function getAllRepos() {
            var deferred = $q.defer();

            $http.get("https://api.github.com/repositories")
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });
            
            return deferred.promise;
        }
        
        function getRepo(repoAndOwner) {
            var deferred = $q.defer();
            
            $http.get("https://api.github.com/repos/"+repoAndOwner.owner+"/"+repoAndOwner.repo)
            .success(function(data, status, headers, config){
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);
            })
            return deferred.promise;
        }
    }
})()