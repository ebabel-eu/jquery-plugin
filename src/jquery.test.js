/*jslint browser: true */
/*global jQuery */

// Shell for the plugin code
(function ($) {
    "use strict";

    $.fn.test = function () {
        // Plugin code
        return this.each(function () {
            // Do something to each item in turn, not all at once (better performance).
            $(this)
                // First, store the initial background color as data without changing the HTML.
                .data("original-color", $(this).css("background-color"))
                // Secondly, set the current background color to a given color.
                .css("background-color", "#fff47f")
                // Finally, attach an event handler that will only run once and then un-attach itself (good for performance).
                .one("mouseenter", function() {
                    // Animate to the stored background color.
                    $(this).animate({
                        "background-color": $(this).data("original-color")
                    }, "fast");
                });
        });
    };

}(jQuery));