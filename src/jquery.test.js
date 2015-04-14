/*jslint browser: true */
/*global jQuery */

// Shell for the plugin code
(function ($) {
    "use strict";

    $.fn.test = function () {
        // Plugin code
        return this.each(function () {
            // Do something to each item, for example highlight it in yellow.
            $(this).css("background-color", "#ff0");
        });
    };

}(jQuery));