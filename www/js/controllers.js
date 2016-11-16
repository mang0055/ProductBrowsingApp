angular.module('starter.controllers', [])

.controller('CategoriesCtrl', function($scope,$stateParams,fetchCategory) {
      fetchCategory.fetch().then(function(data) {
       $scope.data = data;
    });
    
})
.controller('BookListCtrl', function($scope, $stateParams,fetchCategory) {
    console.log("BookListCtrl");    
    $scope.catID = $stateParams.catID;
        console.log($scope.catID);
        $scope.bookdata = [];
        fetchCategory.fetch().then(function (data) {
            $scope.data=data;
            for (var i = 0; i < data.books.length; i++) {
                if (data.books[i].cat_id == $scope.catID) {
                    $scope.bookdata.push(data.books[i]);
                }
            }

        });
        $scope.toggleCategory=function(){
            console.log("aa");
        }
    
})
.controller('BookDetailCtrl', function($scope, $stateParams, fetchCategory) {
        $scope.catID = $stateParams.catID;
        $scope.bookdata = [];
        fetchCategory.fetch().then(function (data) {
            for (var i = 0; i < data.books.length; i++) {
                if (data.books[i]._id == $stateParams.bookID) {
                    $scope.currentbook=data.books[i];
                }
            }

        });
    $scope.isEmpty = function(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
};
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ProfileCtrl', function($scope) {
  
});
