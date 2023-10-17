$(document).ready(function () {
    $(".icon").click(function () {
        $(this).toggleClass("fa-eye-slash fa-eye");
        var x = $("#pass");
        if (x.attr("type") === "password") {
            x.attr("type", "text");
        } else {
            x.attr("type", "password");
        }
    });

});
