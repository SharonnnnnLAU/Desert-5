$(function () {

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000);
        event.preventDefault();
    });


    //toggle scroll menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll >= 200) {
            $('.sticky-navigation').removeClass('navbar-dark').addClass('shadow-bottom').addClass('navbar-light');
        } else {
            $('.sticky-navigation').removeClass('shadow-bottom').removeClass('navbar-light').addClass('navbar-dark');
        }

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top-d5').addClass('active');
        } else {
            $('.scroll-top-d5').removeClass('active');
        }
        if (scroll >= 600) {
            $('.scroll-top-raf').addClass('active');
        } else {
            $('.scroll-top-raf').removeClass('active');
        }
        if (scroll >= 600) {
            $('.scroll-top-knoor').addClass('active');
        } else {
            $('.scroll-top-knoor').removeClass('active');
        }
        if (scroll >= 600) {
            $('.scroll-top-xbc').addClass('active');
        } else {
            $('.scroll-top-xbc').removeClass('active');
        }
        if (scroll >= 600) {
            $('.scroll-top-lundy').addClass('active');
        } else {
            $('.scroll-top-lundy').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top-d5').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });
    $('.scroll-top-raf').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });
    $('.scroll-top-knoor').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });
    $('.scroll-top-xbc').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });
    $('.scroll-top-lundy').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });
});