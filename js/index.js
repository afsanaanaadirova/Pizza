$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        dotsSpeed: 1000,
        dragEndSpeed: 1000,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        pagination: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
      //counter
      $('.counter').counterUp();

          //grid-Portfolio section
    $('.gallery_menu').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    });
    $(".title li").eq(0).click(function (e) {
        e.preventDefault();
        $('.gallery_menu').isotope({
            filter: '.pizza'
        });
    })
    $(".title li").eq(1).click(function (e) {
        e.preventDefault();
        $('.gallery_menu').isotope({
            filter: '.drinks'
        });
    })
    $(".title li").eq(2).click(function (e) {
        e.preventDefault();

        $('.gallery_menu').isotope({
            filter: '.burgers'
        });
    })
    $(".title li").eq(3).click(function (e) {
        e.preventDefault();
        $('.gallery_menu').isotope({
            filter: '.pasta'
        });
    });
    $('.btnburger').click(function(){
        $('.sec_navbar .menu_list').toggleClass("active",1000);
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $(".sec_navbar").addClass('fixed');
        } else {
            $('.sec_navbar').removeClass('fixed');
        }
    });

})