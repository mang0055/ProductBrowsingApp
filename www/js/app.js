// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ionic-ratings','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
      controller: function($scope,$stateParams){
          $scope.passDefaultRoute = function(){
              if($stateParams.catID==null){
                  return "tab/categories/1/books";
              }
              else{
                  return "tab/categories/{{$stateParams.catID}}/books";
              }
          }
      }
  })

  // Each tab has its own nav history stack:

  .state('tab.categories', {
    url: '/categories',
    views: {
      'tab-categories': {
        templateUrl: 'templates/tab-categories.html',
        controller: 'CategoriesCtrl'
      }
    }
  })

  .state('tab.books', {
      url: '/categories/:catID/books',
      views: {
        'tab-books': {
          templateUrl: 'templates/tab-books.html',
          controller: 'BookListCtrl'
        }
      }
    })
  .state('tab.bookdetail', {
      url: '/categories/:catID/books/:bookID',
      views: {
        'tab-books': {
          templateUrl: 'templates/tab-book.html',
          controller: 'BookDetailCtrl'
        }
      }
    })
  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/tab/categories');

});
