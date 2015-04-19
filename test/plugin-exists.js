// Test if something is defined.
(function ($, QUnit) {
    QUnit.test("plugin exists", function (assert) {
        assert.ok($("p").test);
    });
}(window.jQuery, window.QUnit));
