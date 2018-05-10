// Famous v1.1
$(document).ready(function() {
    $(".navbar-toggler").on("click", function(e) {
        e.preventDefault();
        $(".navbar").addClass("sticky");
    });

    // Smoth Scroll
    $('a[href^="#"]').on("click", function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $target.offset().top - 79
                },
                900,
                "swing"
            );

        $(".navbar-collapse.collapse").removeClass("show");
    });

    //Sticky
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".navbar:not(.default)").addClass("sticky");
        } else {
            $(".navbar:not(.default)").removeClass("sticky");
        }
        if ($(window).scrollTop() > 50) {
            $(".scroll-to-top").addClass("affix");
        } else {
            $(".scroll-to-top").removeClass("affix");
        }
    });

    // Carousel;
    var $item = $(".carousel-item");
    var $wHeight = $(window).height();
    $item.eq(0).addClass("active");
    $item.height($wHeight);
    $item.addClass("full-screen");

    $(".carousel img").each(function() {
        var $src = $(this).attr("src");
        var $color = $(this).attr("data-color");
        $(this)
            .parent()
            .css({
                "background-image": "url(" + $src + ")",
                "background-color": $color
            });
        $(this).remove();
    });

    $(window).on("resize", function() {
        $wHeight = $(window).height();
        $item.height($wHeight);
    });

    $(".testimonials-carousel").flickity({
        cellAlign: "center",
        wrapAround: true,
        setGallerySize: false
        //prevNextButtons: false,
        //freeScroll: true
    });

    $(".trade-shows-package-carousel").flickity({
        cellAlign: "center",
        wrapAround: true,
        setGallerySize: false
        //prevNextButtons: false,
        //freeScroll: true
    });
});
