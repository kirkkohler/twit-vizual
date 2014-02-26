'use strict';

app.factory('Session', ['$resource', function ($resource) {
    return $resource('/api/session/');
  }]);
