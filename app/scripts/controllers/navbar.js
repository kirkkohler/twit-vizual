'use strict';

app.controller('NavbarController', function($scope, $location, Auth) {
  $scope.menu = [{
    'title': 'Home',
    'link': '/'
  }];
  /*
  * Removed until user sign-up is supported
  , {
    'title': 'Settings',
    'link': '/settings'
  }];
  */
  
  $scope.logout = function() {
    Auth.logout()
      .then(function() {
        $location.path('/login');
      });
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});