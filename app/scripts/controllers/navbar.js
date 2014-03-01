'use strict';

app.controller('NavbarController', ['$scope', '$location', 'Auth',
  function($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'About',
      'link': '/about'
    }, {
      'title': 'Settings',
      'link': '/settings'
    }];

    $scope.logout = function() {
      Auth.logout()
        .then(function() {
          $location.path('/login');
        });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }
]);