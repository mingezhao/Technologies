﻿(function (app, angular) {
    'use strict';

    app.controller('HomeCtrl', function ($scope, modules) {
        $scope.modules = modules;
    });
})(app, angular)