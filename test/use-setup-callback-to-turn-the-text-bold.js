// Synchronous callback text.
(function ($, QUnit) {
    QUnit.test("use setup callback to turn the text bold", function (assert) {
        var body = $("body"),
            lorem = "<div id=\"lorem\">lorem ipsum</div>";

        body.append(lorem);
        $("#lorem").highlight({
            setup: function () {
                $(this).css("font-weight", "600");
            }
        });

        assert.deepEqual($("#lorem").css("font-weight"), "600");
        $("#lorem").remove();
    });
}(window.jQuery, window.QUnit));
