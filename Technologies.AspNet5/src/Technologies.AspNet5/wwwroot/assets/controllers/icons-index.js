(function (app, angular) {
    'use strict';

    app.controller('IconsCtrl', function ($scope, $http) {
        //$http.get('/lib/font-awesome/css/font-awesome.css').
        //    success(function (data) {
        //        var results = data.match(/[a-z|A-Z|-]*:before/g);
        //        for (var i = 0; i < results.length; i++) {
        //            results[i] = results[i].replace(':before', '');
        //        }
        //        //$scope.FontAwesome = ['asdfasdf', '2323'];

        //        var tmp = [];
        //        for (var i = 0; i < 400; i++) {
        //            tmp.push(results[i].replace(':before', ''));
        //        }

        //        $scope.FontAwesome = tmp;
        //    });

        $http.get('/icons/geticons').
            success(function (data) {
                $scope.Glyphicons = data.Glyphicons;
                $scope.FontAwesome = data.FontAwesome;
            });
    });
})(app, angular)