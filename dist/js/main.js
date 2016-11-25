$('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
        hover: true,
        gutter: 0,
        belowOrigin: true,
        alignment: 'right'
    }
);
$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true
    });
});
$('.carousel.carousel-slider').carousel({
    indicators: true,
    full_width: true
});
