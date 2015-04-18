// todo: can Istanbul work with QUnit?

(function ($, QUnit) {

    QUnit.module( "Plugin applied to a div", {
        beforeEach: function () {
            $("body").append("<div id=\"lorem\">lorem ipsum</div>");
        },
        afterEach: function () {
            $("#lorem").remove();
        }
    });

    // Test if something is defined.
    QUnit.test("plugin exists", function (assert) {
        assert.ok($("p").test);
    });

    // Test if something is a function
    QUnit.test("plugin is a function", function (assert) {
        assert.ok($.isFunction($("p").test));
    });

    // Equality test
    QUnit.test("change the background colour to red", function (assert) {
        $("#lorem").test({
            colour: "#f00"
        });
        assert.equal($("#lorem").css("background-color"), "rgb(255, 0, 0)");
    });

    // Asynchronous test
    QUnit.test("rollover changes the element background colour", function (assert) {
        var done = assert.async();

        $("#lorem").test({
            colour: "#ff0",
            duration: 1
        });

        $("#lorem").trigger("mouseenter");

        setTimeout(function() {
            assert.notEqual($("#lorem").css("background-color"), "rgb(255, 255, 0)");
            done();
        }, 15);
    });

}(window.jQuery, window.QUnit));
