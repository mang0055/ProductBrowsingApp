angular.module('starter.services', [])
.service('categoryService', function ($http, $q) {

	this.get = function () {
		var def = $q.defer();

		$http.get("data/data.json")
			.success(function (data) {
				def.resolve(angular.fromJson(data.categories));
			})
			.error(function () {
				def.reject("Failed to get categories");
			});

		return def.promise;
	}
})

.service('booksService', function ($http, $q) {
	this.get = function () {
		var def = $q.defer();

		$http.get("data/data.json")
			.success(function (data) {
				def.resolve(angular.fromJson(data.books));
			})
			.error(function () {
				def.reject("Failed to get products");
			});

		return def.promise;
	}
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
