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

  sr.reveal('.services li', { duration: 1000, scale: '1', easing: 'ease-in-out', reset: 'true', distance: '50px' }, 300);
  sr.reveal('.people-list .people-bio-thumb', { duration: 1000, scale: '1', easing: 'ease-in-out', reset: 'true', distance: '50px' }, 300);

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

  setTimeout(function(){
    $('.hero h1').removeClass('animation');
    $('.hero h1 span').removeClass('animation');
    $('.hero h1').addClass('opacityscroll');
},2500);

});
