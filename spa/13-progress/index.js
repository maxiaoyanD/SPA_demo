(function() {
    var process = $("progress"), 
        n = 0,
        num = 0;
    $("#start").click(function() {
        0 === n && (n = window.setInterval(function() {
            process.attr("value", num++)
        }, 100))
    }),
    $("#stop").click(function() {
        window.clearInterval(n),
        n = 0
    }),
    $("#reset").click(function() {
        process.attr("value", num = 0)
    })
}());