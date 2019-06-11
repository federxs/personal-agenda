'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'view2Ctrl'
        });
    }])

    .controller('view2Ctrl', view2Ctrl);

view2Ctrl.$inject = ['$scope', '$location']

function view2Ctrl($scope, $location) {
    var vm = $scope;
    vm.init = init;
    init();

    vm.contacts = [
        {
            contactId: 1,
            name: "Juancito Pérez",
            mail: "juanci@gmail.com",
            maritalState: 0,
            telephoneNumber: "+54 3541 58 2613",
            profilePictureURI: "assets/profile_pic.png",
            hobbies: ["futbol", "informática", "lectura"]
        },
        {
            contactId: 1,
            name: "Juancito Pérez",
            mail: "juanci@gmail.com",
            maritalState: 0,
            telephoneNumber: "+54 3541 58 2613",
            profilePictureURI: "assets/profile_pic.png",
            hobbies: ["futbol", "informática", "lectura"]
        }, {
            contactId: 1,
            name: "Juancito Pérez",
            mail: "juanci@gmail.com",
            maritalState: 0,
            telephoneNumber: "+54 3541 58 2613",
            profilePictureURI: "assets/profile_pic.png",
            hobbies: ["futbol", "informática", "lectura"]
        }, {
            contactId: 1,
            name: "Juancito Pérez",
            mail: "juanci@gmail.com",
            maritalState: 0,
            telephoneNumber: "+54 3541 58 2613",
            profilePictureURI: "assets/profile_pic.png",
            hobbies: ["futbol", "informática", "lectura"]
        }, {
            contactId: 1,
            name: "Juancito Pérez",
            mail: "juanci@gmail.com",
            maritalState: 0,
            telephoneNumber: "+54 3541 58 2613",
            profilePictureURI: "assets/profile_pic.png",
            hobbies: ["futbol", "informática", "lectura"]
        }
    ];

    function init() {
        $('#tab_contacts').dataTable({
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