// Test if something is defined.
(function ($, QUnit) {
    "use strict";

    QUnit.test("plugin exists", function (assert) {
        assert.ok($("p").highlight);
    });
}(window.jQuery, window.QUnit));
