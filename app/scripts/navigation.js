'use strict';

/* Smooth Scroll in same page*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Mobile menu */

$(document).ready(function() {
  $('.navigation-mobile').on('click', function() {
    $('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('appear');
    $('header').toggleClass('mobile-appear');
  });
});
