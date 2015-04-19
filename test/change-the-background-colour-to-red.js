// Equality test.
(function ($, QUnit) {
    QUnit.test("change the background colour to red", function (assert) {
        var body = $("body"),
            lorem = "<div id=\"lorem\">lorem ipsum</div>";

        body.append(lorem);
        $("#lorem").test({
            colour: "#f00"
        });
        assert.equal($("#lorem").css("background-color"), "rgb(255, 0, 0)");
        $("#lorem").remove();
    });
}(window.jQuery, window.QUnit));