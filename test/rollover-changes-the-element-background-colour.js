// Asynchronous test.
(function ($, QUnit) {
    "use strict";

    QUnit.test("rollover changes the element background colour", function (assert) {
        var done = assert.async(),
            body = $("body"),
            lorem = "<div id=\"lorem\">lorem ipsum</div>";

        body.append(lorem);

        $("#lorem").highlight({
            colour: "#ff0",
            duration: 1
        });

        $("#lorem").trigger("mouseenter");

        setTimeout(function() {
            assert.notEqual($("#lorem").css("background-color"), "rgb(255, 255, 0)");
            done();
            $("#lorem").remove();
        }, 15);
    });
}(window.jQuery, window.QUnit));
