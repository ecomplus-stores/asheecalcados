// Add your custom JavaScript for storefront pages here.

$(window).ready(function () {

    if (window.matchMedia('screen and (min-width: 700px)').matches) {

        if (window.location.pathname === "/") {
            $('#header').css('opacity', '0.5');
        }
    }

});


$(window).scroll(function () {

    if (window.matchMedia('screen and (min-width: 700px)').matches) {
        if (window.location.pathname === "/") {
            $('#header').css('opacity', '0.5');
        }
    }

    if ($(window).scrollTop() > 0) {
        $('#header').css('opacity', '1.0');
    }
});

$("#header").click(function () {
    $('#header').css('opacity', '1.0');
});
