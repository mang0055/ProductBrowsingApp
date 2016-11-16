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
  })
.service('fetchFromLocal',function($localStorage){
    //Took reference from https://medium.com/@petehouston/awesome-local-storage-for-ionic-with-ngstorage-c11c0284d658#.s87l8eqti
  $localStorage = $localStorage.$default({
		rating: [],
		product: []
	});

	var _add = function (rate, catId) {
		for (var i = 0; i < $localStorage.product.length; i++) {
			if (catId == $localStorage.product[i]) {
				$localStorage.rating.splice(i, 1)
				$localStorage.product.splice(i, 1)

			}
		}
		$localStorage.rating.push(rate);
		$localStorage.product.push(catId)

	}
	var _get = function (catId) {
		if ($localStorage.product.length > 0) {
			for (var i = 0; i < $localStorage.product.length; i++) {
				if (catId == $localStorage.product[i]) {
					return $localStorage.rating[i]
				}
			}
		} else {
			return null
		}

	}
	return {
		add: _add,
		get: _get
	};  
});
