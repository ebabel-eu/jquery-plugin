// todo: write lots of unit tests...
// todo: can Istanbul work with QUnit?

(function ($, QUnit) {

    QUnit.test("plugin exists", function (assert) {
        assert.ok( $("p").test, "Passed!" );
    });

    QUnit.test("plugin is a function", function (assert) {
        assert.ok( $.isFunction($("p").test), "Passed!" );
    });

}(jQuery, QUnit));
