(function (app, angular) {
    'use strict';

    app.controller('IconsCtrl', function ($scope, $http) {
        $http.get('/icons/geticons').
            success(function (data) {
                $scope.Glyphicons = data.Glyphicons;
                $scope.FontAwesome = data.FontAwesome;
            });
    });
})(app, angular)