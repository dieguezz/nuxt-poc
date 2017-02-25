'use strict';
/* jshint newcap:false */
/* globals Rellax, ScrollReveal */

$(document).ready(function() {

    var sr = ScrollReveal();
    sr.reveal('.twitter-news-slides, #about-us h2, #about-us h3, #about-us a, #about-us p, #people h2, #people h3, #people a, #people p, #services h2, #services h3, #services a, #services p, #contact-us h2, #contact-us h3, #contact-us p, #blog-news a, #how-to h2, #how-to a, #twitter-news h2, #blog-news h2, .call-dna, .etereotypes-list-unit, .etereotypes-cons h2, .etereotypes-cons p, .etereotypes-about-you h2, #about-intro h2, #about-intro h4, #about-intro q, #about-intro .about-us-pictures', {
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