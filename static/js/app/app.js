// Generated by CoffeeScript 1.7.1
(function() {
  var baseApp, static_file;

  baseApp = angular.module('baseApp', ['ngRoute', 'userControllers', 'userServices']);

  static_file = '/static/';

  baseApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  baseApp.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/users', {
        templateUrl: static_file + 'partials/user.html',
        controller: 'UserCtrl',
        resolve: {
          users: function(User) {
            return User.list();
          }
        }
      });
    }
  ]);

}).call(this);
