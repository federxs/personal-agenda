'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginCtrl'
        });
    }])
    .controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$scope','$location']

function loginCtrl($scope, $location) {
    var vm = $scope;

    vm.logIn = logIn;

    function logIn(){
        $location.path( "/list-contacts");
    }
}