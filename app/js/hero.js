'use strict';

$(document).ready(function() {

    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    var position = 0;
    $(window).scroll(fadeHero);
    fadeHero();

    function fadeHero() {
        requestAnimationFrame(function() {
            $('.hero h2.opacityscroll').css('opacity', (1 - ($('.hero').offset().top - position) * 0.005));
        });
    }

    setTimeout(function() {
        $('.hero h2').removeClass('animation');
        $('.hero h2 span').removeClass('animation');
        $('.hero h2').addClass('opacityscroll');
    }, 2500);

});