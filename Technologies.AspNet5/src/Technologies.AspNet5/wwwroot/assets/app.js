(function (window, angular) {
    'use strict';

    window.app = angular.module('technologiesApp', ['ui.bootstrap']);

    app.factory('modules', function () {
        return [
            {
                order: 1,
                name: 'Icons',
                src: '../icons',
                desc: '11111'
            },
            {
                order: 2,
                name: 'jQuery',
                src: '../jquery',
                desc: '2222222'
            }
        ];
    });

    app.controller('HeaderCtrl', function ($scope, modules) {
        $scope.modules = modules;
    });

    app.directive('headerContent', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'template/header/header-content.html',
            scope: {
                title: '@',
                desc: '@',
            }
        };
    });

    app.run(function ($templateCache) {
        $templateCache.put('template/header/header-content.html',
          '<header class="bs-header text-center">\n' +
          ' <div class="container">\n' +
          '     <h1>{{title}}</h1>\n' +
          '     <p>{{desc}}</p>\n' +
          ' </div>' +
          '</header>');
    });

})(window, angular)