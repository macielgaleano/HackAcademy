$(document).ready(function() {
    $(window).scroll(function() {
        console.log('funca')
        var menu = $('#menu');
        if (menu.offset().top > 56) {
            menu.addClass("bg-inverse");
        } else {
            menu.removeClass("bg-inverse");
        }
    });
});