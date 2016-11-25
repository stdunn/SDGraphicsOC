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
$(document).ready(function(){
    $('.materialboxed').materialbox();
});
$(document).ready(function(){
    $('.slider').slider({
    });
});
$('.carousel.carousel-slider').carousel({full_width: true});
$(document).ready(function(){
    $('.parallax').parallax();
});
