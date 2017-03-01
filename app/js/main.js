'use strict';
/* jshint newcap:false */
/* globals Rellax, ScrollReveal */

$(document).ready(function() {

    var sr = ScrollReveal();
    sr.reveal('.reveal', {
        easing: 'ease-in-out',
        scale: '1',
        reset: 'true',
        distance: '50px'
    });

    sr.reveal('.blog-news-unit', { duration: 1000, scale: '1', easing: 'ease-in-out', reset: 'true', distance: '50px' }, 50);
    sr.reveal('.contact-us-unit', { duration: 1000, scale: '1', easing: 'ease-in-out', reset: 'true', distance: '50px' }, 50);
    sr.reveal('.services-list-unit', { duration: 1000, scale: '1', easing: 'ease-in-out', reset: 'true', distance: '50px' }, 50);
    sr.reveal('.how-to-unit', { duration: 1000, scale: '1', easing: 'ease-in-out', reset: 'true', distance: '50px' }, 50);
    sr.reveal('.people-pictures-unit', { duration: 1000, scale: '1', easing: 'ease-in-out', reset: 'true', distance: '50px' }, 50);

    var rellax = new Rellax('.rellax');

    $('.values-container').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        draggable: false,
        fade: true,
        speed: 1200,
    });

});