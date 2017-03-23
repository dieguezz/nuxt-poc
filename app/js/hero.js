'use strict';

$(document).ready(function() {

  if (!$('.hero').length) {
    return;
  }

  $(window).scroll(fadeHero);
  fadeHero();

  var topPosition = $('.menu').offset().top;

  function fadeHero() {
    window.requestAnimationFrame(function() {
      var offset = $('.menu').offset() || {};
      $('.hero h2.opacityscroll').css('opacity', (1 - (Math.abs(offset.top - topPosition) * 0.005)));
    });
  }

  setTimeout(function() {
    $('.hero h2').removeClass('animation');
    $('.hero h2 span').removeClass('animation');
    $('.hero h2').addClass('opacityscroll');
  }, 2500);

});
