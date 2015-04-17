// Shell for the plugin code
(function ($) {
    "use strict";

    $.fn.test = function (options) {
        // Allow options and use defaults wherever an option isn't specified.
        options = $.extend($.fn.test.defaults, options);

        // Plugin code
        return this.each(function () {
            // Do something to each item in turn, not all at once (better performance).
            $(this)
                // First, store the initial background color as data without changing the HTML.
                .data("original-color", $(this).css("background-color"))
                // Secondly, set the current background color to a given color.
                .css("background-color", options.colour)
                // Finally, attach an event handler that will only run once and then un-attach itself (good for performance).
                .one("mouseenter", function () {
                    // Animate to the stored background color.
                    $(this).animate({
                        "background-color": $(this).data("original-color")
                    }, options.duration);
                });
        });
    };

    $.fn.test.defaults = {
        colour: "#fff47f",
        duration: "fast"
    };

}(jQuery));
