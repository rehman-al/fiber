$(document).ready(function () {
    $(".m-icon").click(function () {
        $(".toggle-menu").css("right", "0");
    });
    $(".toggle-menu").click(function () {
        $(".toggle-menu").css("right", "-100%");
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            800: {
                items: 2,
                dots: true

            },
            1000: {
                items: 3
            }
        }
    });
    AOS.init();
});