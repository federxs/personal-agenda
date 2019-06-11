'use strict';

angular.module('myApp.viewContact', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view-contact/:contactId', {
            templateUrl: 'view-contact/view-contact.html',
            controller: 'viewContactCtrl'
        });
    }]);