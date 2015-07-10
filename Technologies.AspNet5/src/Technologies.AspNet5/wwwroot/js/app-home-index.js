(function (app, angular) {
    'use strict';

    app.controller('MainCtrl', function ($scope, $http) {
        $scope.modules = modules;
    });
})(app, angular)