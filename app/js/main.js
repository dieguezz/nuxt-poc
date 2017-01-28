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

  var rellax = new Rellax('.rellax');

  $('.values-container').slick({
    dots: true,
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
