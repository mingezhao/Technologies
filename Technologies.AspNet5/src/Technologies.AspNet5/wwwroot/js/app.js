﻿(function (window, angular) {
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

})(window, angular)