$(document).ready(function() {

    $('.rewiews__slider').slick({
        slidesToShow: 1,
        dots: true,
        speed: 500
    });
  
    $('.slider').slick({
        dots: true,
        slidesToShow: 4,
        speed: 500,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
});