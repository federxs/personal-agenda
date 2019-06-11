'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'view1Ctrl'
  });
}])

.controller('view1Ctrl', view1Ctrl);

view1Ctrl.$inject = ['$scope','$location']

function view1Ctrl($scope, $location) {
  var vm = $scope;

  vm.logIn = logIn;

  function logIn(){
    $location.path( "/view2" );
  }
}