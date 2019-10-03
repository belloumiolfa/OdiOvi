$(document).ready(function() {
    //Parallax

    var scene = document.getElementById("scene");
    var parallax = new Parallax(scene);

    //fixed menu

    var $menu = $("header section nav");
    var $topBar = $("header #top-bar");

    var $sticky = $menu.before($menu.clone().addClass("sticky"));
    var $sticky = $topBar.before($topBar.clone().addClass("sticky-top-bar"));

    $(window).on("scroll", () => {
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", scrollFromTop > 150);
    });

    //slider

    $(".slider-div").slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        fade: false
    });
    //smooth scrol

    $('.menu li a[href^="#"] ').on("click", function(e) {
        e.preventDefault();

        var target = $(this.hash);
        console.log($(this.hash));

        if (target.length) {
            $("html, body")
                .stop()
                .animate({
                        scrollTop: target.offset().top - 100
                    },
                    1000
                );
        }
    });
});