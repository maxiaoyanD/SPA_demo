$(function() {
    var pwd = $("#pwd"), 
        text = $(".pwd-text"),
        e = $("#eye");
        pwd.on("input", function() {
            text.val(pwd.val())
    }),
    e.mouseover(function() {
        text.css("z-index", "10")
    }),
    e.mouseout(function() {
        text.css("z-index", "-10")
    })
});