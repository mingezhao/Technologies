(function (window, angular) {
    'use strict';

    window.app = angular.module('technologiesApp', ['ui.bootstrap']);

    app.factory('modules', function () {
        return [
            {
                order: 1,
                key: 'Icons',
                name: 'Icons',
                src: '/icons/index.html',
                desc: '11111'
            },
            {
                order: 2,
                key: 'jQuery',
                name: 'jQuery',
                src: '../jquery',
                desc: '2222222'
            }
        ];
    });

    app.directive('headerBanner', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'template/header/header-banner.html',
            controller: function ($scope, modules) {
                $scope.modules = modules;
            }
        };
    });

    app.directive('headerContent', function (modules) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'template/header/header-content.html',
            scope: {
                title: '=',
                desc: '=',
                moduleKey: '='
            },
            controller: function ($scope, modules) {
                if (angular.isUndefined($scope.title) && angular.isUndefined($scope.desc) && !angular.isUndefined($scope.moduleKey)) {
                    $scope.title = 'test';
                    $scope.desc = 'desc';
                }
            }
        };
    });

    app.run(function ($templateCache) {
        $templateCache.put('template/header/header-banner.html',
          '<header class="navbar navbar-default navbar-fixed-top">\n' +
          ' <div class="navbar-inner">\n' +
          '     <div class="container">\n' +
          '         <nav>\n' +
          '             <a class="navbar-brand" href="@Url.Content(" ~ />")">@AppSettings.Options.SiteTitle</a>\n' +
          '             <ul class="nav navbar-nav">\n' +
          '                 <li class="dropdown" dropdown>\n' +
          '                     <span role="button" class="dropdown-toggle" dropdown-toggle>\n' +
          '                         Directives <b class="caret"></b>\n' +
          '                     </span>\n' +
          '                     <ul class="dropdown-menu">\n' +
          '                         <li ng-repeat="module in modules">\n' +
          '                             <a ng-href="{{module.src}}">{{module.name}}</a>\n' +
          '                         </li>\n' +
          '                     </ul>\n' +
          '                 </li>\n' +
          '                 <li><a href="https://github.com/mingezhao/Technologies"><i class="fa fa-github"></i>&nbsp;Git Hub</a></li>\n' +
          '             </ul>\n' +
          '         </nav>\n' +
          '     </div>\n' +
          ' </div>\n' +
          '</header>\n'
          );
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