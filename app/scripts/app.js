'use strict';

var app = angular.module('twitVizualApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main',
      controller: 'MainController'
    })
    .when('/login', {
      templateUrl: 'partials/login',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: 'partials/signup',
      controller: 'SignupController'
    })
    .when('/settings', {
      templateUrl: 'partials/settings',
      controller: 'SettingsController',
      authenticate: true
    })
    .when('/about', {
      templateUrl: 'partials/about'
    })
    .when('/metrics', {
      templateUrl: 'partials/metrics',
      controller: 'MetricsController'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);

  // Intercept 401s and redirect you to login
  $httpProvider.interceptors.push(['$q', '$location',
    function($q, $location) {
      return {
        'responseError': function(response) {
          if (response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          } else {
            return $q.reject(response);
          }
        }
      };
    }
  ]);
})
  .run(function($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function(event, next) {

      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });