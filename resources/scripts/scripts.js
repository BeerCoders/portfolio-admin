function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOnBottom = 80
            ;

        if (distanceY + 10 > shrinkOnBottom) {
            $('.site-heading span').addClass("hide");
            $('.site-heading hr').addClass("hide");
        } else {
            $('.site-heading span').removeClass("hide");
            $('.site-heading hr').removeClass("hide");
        }

        if (distanceY > shrinkOnBottom) {
            $('.site-heading h1').addClass("header");
            $('nav').addClass("smallerBottom");
        } else {
            $('.site-heading h1').removeClass("header");
            $('nav').removeClass("smallerBottom");
        }
    });
}

$(window).load(function () {
    document
        .getElementById('home')
        .addEventListener('click', function () {
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 2000);
        });
    document
        .getElementById('blog')
        .addEventListener('click', function () {
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 2000);
        });
    document
        .getElementById('small-beer')
        .addEventListener('click', function () {
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 2000);
        });
    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $("form").offset().top
        }, 2000);
    });

    $('.site-heading.home').addClass('resize');

    if (window.location.pathname == '/') {
        $('.intro-header').css({'height': $(window).height()});
        $('.beer.big')
            .show(function () {
                $('.beer.small').addClass('home');
            })
            .animate({
                opacity: 1
            }, 500)
            .delay(5500)
            .animate({
                    duration: 'slow',
                    easing: 'easeOutBack',
                    opacity: 0
                }, 300,
                function () {
                    $('.beer.big').hide(500);
                    $('.intro-header').css({'height': 'auto'});
                    init();
                });
    } else {
        $('.beer.small').animate({
            opacity: 1
        }, 1000);
        init();
    }
});
