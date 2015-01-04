/**
 * Created by gsawant on 1/3/15.
 */
'use strict';

var app = angular.module('myPhoneCatApp', []);

app.controller('PhoneListController', function($scope) {
    $scope.phones = [
        {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.', 'age': 1},
        {'name': 'Motorola XOOM with Wi-Fi', 'snippet': 'The Next, Next Generation tablet', 'age': 2},
        {'name': 'MOTOROLA XOOM', 'snippet': 'The Next, Next Generation tablet.', 'age': 3}
    ];

    $scope.name = "World";
    $scope.orderProp = 'age';
});