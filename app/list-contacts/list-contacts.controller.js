'use strict';

angular.module('myApp.listContacts', ['ngRoute'])
    .controller('listContactsCtrl', listContactsCtrl);

listContactsCtrl.$inject = ['$scope', '$location'];

function listContactsCtrl($scope, $location) {
    var vm = $scope;
    vm.init = init;
    init();

    function init() {
        vm.contacts = obtainContactsFromAPI();
        $('#tab_contacts').dataTable({
            "aaData": vm.contacts,
            "aoColumns": [
                {"mData": "name"},
                {"mData": "email"},
                {"mData": "maritalStatus"},
                {"mData": "telephoneNumber"}
            ],
            "iDisplayLength": 10,
            language: {
                "emptyTable": "No hay informaci&oacute;n disponible en la tabla",
                "loadingRecords": "Cargando...",
                "processing": "Cargando contactos...",
                "zeroRecords": "No hay coincidencias",
                "search": "",
                "paginate": {
                    "previous": "&laquo;",
                    "next": "&raquo;"
                },
                searchPlaceholder: "Buscar"
            }
        });
    }

    function obtainContactsFromAPI() {
        return [
            {
                contactId: 1,
                name: "Juancito Pérez",
                email: "juanci@gmail.com",
                maritalStatus: 0,
                telephoneNumber: "+54 3541 58 2613",
                profilePictureURI: "assets/profile_pic.png",
                hobbies: ["futbol", "informática", "lectura"]
            },
            {
                contactId: 1,
                name: "Juancito Pérez",
                email: "juanci@gmail.com",
                maritalStatus: 0,
                telephoneNumber: "+54 3541 58 2613",
                profilePictureURI: "assets/profile_pic.png",
                hobbies: ["futbol", "informática", "lectura"]
            }, {
                contactId: 1,
                name: "Juancito Pérez",
                email: "juanci@gmail.com",
                maritalStatus: 0,
                telephoneNumber: "+54 3541 58 2613",
                profilePictureURI: "assets/profile_pic.png",
                hobbies: ["futbol", "informática", "lectura"]
            }, {
                contactId: 1,
                name: "Juancito Pérez",
                email: "juanci@gmail.com",
                maritalStatus: 0,
                telephoneNumber: "+54 3541 58 2613",
                profilePictureURI: "assets/profile_pic.png",
                hobbies: ["futbol", "informática", "lectura"]
            }, {
                contactId: 1,
                name: "Juancito Pérez",
                email: "juanci@gmail.com",
                maritalStatus: 0,
                telephoneNumber: "+54 3541 58 2613",
                profilePictureURI: "assets/profile_pic.png",
                hobbies: ["futbol", "informática", "lectura"]
            }
        ];
    }
}