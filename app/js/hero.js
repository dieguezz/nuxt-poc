'use strict';

$(document).ready(function() {

  var position = 0;
  if ($('.hero').length) {
    $(window).scroll(fadeHero);
    fadeHero();
  }

  function fadeHero() {
    window.requestAnimationFrame(function() {
      var offset = $('.hero').offset() || {};
      $('.hero h2.opacityscroll').css('opacity', (1 - (offset.top - position) * 0.005));
    });
  }

  setTimeout(function() {
    $('.hero h2').removeClass('animation');
    $('.hero h2 span').removeClass('animation');
    $('.hero h2').addClass('opacityscroll');
  }, 2500);

});
