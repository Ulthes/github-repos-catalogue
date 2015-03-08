(function () {
    'use strict';

    angular
        .module('gitHubReposCtlgApp')
        .service('GithubRepository', GithubRepository);

    GithubRepository.$inject = ['$http', '$q'];

    function GithubRepository($http, $q) {
        var service = {
            getAllRepos: getAllRepos,
            getRepo: getRepo,
            getRepoEvents: getRepoEvents
        }

        return service;


        function getAllRepos(since) {
            var deferred = $q.defer();

            $http.get("https://api.github.com/repositories" + "?since=" + since)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });
            
            return deferred.promise;
        }
        
        function getRepo(ownerAndRepoObj) {
            var deferred = $q.defer();
            
            $http.get("https://api.github.com/repos/"+ownerAndRepoObj.owner+"/"+ownerAndRepoObj.repo)
            .success(function(data, status, headers, config){
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);
            })
            return deferred.promise;
        }
        
        function getRepoEvents(ownerAndRepoObj) {
            var deferred = $q.defer();
            
            $http.get("https://api.github.com/repos/"+ownerAndRepoObj.owner+"/"+ownerAndRepoObj.repo+"/events")
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