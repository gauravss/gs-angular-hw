/**
 * Created by gsawant on 1/3/15.
 */
'use strict';

var app = angular.module('myPhoneCatApp', []);

app.controller('PhoneListController', function($scope) {
    $scope.phones = [
        {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi', 'snippet': 'The Next, Next Generation tablet'},
        {'name': 'MOTOROLA XOOM', 'snippet': 'The Next, Next Generation tablet.'}
    ];

    $scope.name = "World";
});