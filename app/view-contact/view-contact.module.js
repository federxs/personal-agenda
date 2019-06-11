'use strict';

angular.module('myApp.viewContact', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view-contact/:contactId', {
            templateUrl: 'view-contact/view-contact.html',
            controller: 'viewContactCtrl'
        });
    }])

    .controller('viewContactCtrl', viewContactCtrl);

viewContactCtrl.$inject = ['$scope', '$location']

function viewContactCtrl($scope, $location) {
    var vm = $scope;
    vm.init = init;
    init();

    vm.selectedContact = {
        contactId: 1,
        name: "Juancito Pérez",
        mail: "juanci@gmail.com",
        maritalState: 0,
        telephoneNumber: "+54 3541 58 2613",
        profilePictureURI: "assets/profile_pic.png",
        hobbies: ["futbol", "informática", "lectura"]
    };

    function init() {
        $('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>');
        $('#example').dataTable({
            "aaData": vm.contacts,
            "aoColumns": [
                {"sTitle": "Nombre"},
                {"sTitle": "Email"},
                {"sTitle": "Estado Civil", "sClass": "center"},
                {"sTitle": "Teléfono"},
                {"sTitle": "Ver", "sClass": "center"}
            ]
        });
    }
}