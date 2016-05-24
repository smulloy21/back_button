var app = angular.module('exampleApp', []);

app.controller("ExampleCtrl", function _a_OverviewCtrl($scope, $window) {

    $window.onbeforeunload = function () {
        console.log('beforeunload triggered');
        return 'This alert brought to you by the beforeunload event.';
    };

    $window.onunload = function () {
        console.log('unload triggered');
        return 'This alert brought to you by the unload event.';
    };

    $window.onpagehide = function () {
        console.log('pagehide triggered');
        return 'This alert brought to you by the pagehide event.';
    };

});