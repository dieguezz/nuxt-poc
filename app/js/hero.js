'use strict';

$(document).ready(function() {

  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;

  var position = $('.hero h1').offset().top;
  $(window).scroll(function(evt) {
    requestAnimationFrame(function() {
      $('.hero h1').css('opacity', (1 - ($('.hero h1').offset().top - position) * 0.005));
    });
  });

});
