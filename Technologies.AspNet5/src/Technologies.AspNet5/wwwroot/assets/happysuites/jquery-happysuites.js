(function ($) {
    'use strict';

    window.HappySuites = function (el) {
        this.el = el;
    };

    $.hs = {
        extend: function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    HappySuites.prototype[key] = obj[key];
                }
            }
        }
    };

    $.fn.extend({
        hs: function () {
            return new HappySuites(this);
        }
    });

    $.hs.extend({
        alert: function () {
            alert($(this.el).val());
        }
    });

})(jQuery);