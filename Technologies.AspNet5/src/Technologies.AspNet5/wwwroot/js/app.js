(function (window, angular) {
    'use strict';

    window.app = angular.module('app', ['ui']);

    app.factory('modules', function () {
        return [
            {
                name: 'Icons',
                src: '../icons',
                desc: '11111'
            },
            {
                name: 'jQuery',
                src: '../jquery',
                desc: '2222222'
            }
        ];
    });

})(window, angular)