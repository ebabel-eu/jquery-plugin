// Test if something is a function.
(function ($, QUnit) {
    "use strict";

    QUnit.test("plugin is a function", function (assert) {
        assert.ok($.isFunction($("p").highlight));
    });
}(window.jQuery, window.QUnit));
