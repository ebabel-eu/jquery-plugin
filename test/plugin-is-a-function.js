// Test if something is a function.
(function ($, QUnit) {
    QUnit.test("plugin is a function", function (assert) {
        assert.ok($.isFunction($("p").test));
    });
}(window.jQuery, window.QUnit));
