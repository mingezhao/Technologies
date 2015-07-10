(function (app, angular) {
    'use strict';

    app.controller('MainCtrl', function ($scope, $http, modules) {
        $scope.modules = modules;
    });
})(app, angular)