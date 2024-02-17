function logo_carouselInit() {
    $('.owl-carousel.logo_active').owlCarousel({
        dots: false,
        loop: true,
        margin: 30,
        stagePadding: 2,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5
            }
        }
    });
}
