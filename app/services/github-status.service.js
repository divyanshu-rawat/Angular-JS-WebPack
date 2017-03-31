'use strict';

GithubStatusService.$inject = ['$http'];

function GithubStatusService($http) {
    
    var _this = this;

    _this.getStatus = function getStatus() {

        return $http({

            method: 'jsonp',
            url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
            transformResponse: appendTransform($http.defaults.transformResponse, function(value) {

                // console.log(value.status);
                return (value.status === 'good');
            
            })
        });
    
    }
}

angular.module('dashboard').service('GithubStatusService', GithubStatusService);

function appendTransform(defaults, transform) {

  defaults = angular.isArray(defaults) ? defaults : [defaults];

  console.log(defaults.concat(transform));
  return defaults.concat(transform);

}