'use strict';

angular.module('phonecatApp', [
    'ngRoute',
    'phoneDetail',
    'core',
    'phoneList',
    'ngAnimate',
]);

// phonecatApp.controller('PhoneListController',function PhoneListController($scope){
//     $scope.phones = [
//         {
//             name: 'Nexus S',
//             snippet: 'Fast just go faster with Nexus S.'
//         },
//         {
//             name: `Motorola XOOM™  with WiFi`,
//             snippet:'The Next, Next Generation Tablet'
//         },
//         {
//             name: 'MOTOROLA XOOM™',
//             snippet:'The Next, Next Generation Tablet'
//         }
//     ];
// });