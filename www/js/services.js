angular.module('starter.services', [])
 .service('fetchCategory', function ($q, $timeout, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var fetchCategory = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('data/data.json').then(function(response) {
                    return angular.fromJson(response.data);
                });
            }, 30);
        }
    };
    ;
    return fetchCategory;
  });
