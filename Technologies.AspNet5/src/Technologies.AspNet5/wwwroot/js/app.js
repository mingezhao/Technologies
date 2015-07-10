(function (window, angular) {
    'use strict';

    window.app = angular.module('technologiesApp', ['ui.bootstrap']);

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