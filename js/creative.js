(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeOutQuart');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    /*$('#mainNav').affix({
        offset: {
            top: 100
        }
    })*/

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    var bikesSwiper = new Swiper('#bikes-carousel', {
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        lazyLoading: true,
        loop: true,
        nextButton: $('#bikes-carousel-next'),
        prevButton: $('#bikes-carousel-prev'),
        slideToClickedSlide: true,
        speed: 800
    });
    var gearsSwiper = new Swiper('#gears-carousel', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 10,
        loop: true,
        nextButton: $('#gears-carousel-next'),
        prevButton: $('#gears-carousel-prev'),
        autoplay: 3500,
        speed: 800
    });

})(jQuery); // End of use strict
