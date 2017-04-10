'use strict';

/* Home Intro */

$(document).ready(function() {

  if (document.referrer.indexOf(document.location.origin) === -1) {
    $('.preloader').removeClass('hidden');
  }

  setTimeout(function() {
    $('body').css('background', '#171A1C');
    $('.preloader').removeClass('loading');
    $('.home-intro h2').addClass('appear');
  }, 3000);

  setTimeout(function() {
    $('.home-intro h2').removeClass('appear');
    $('.home-intro h2').addClass('appeared');
  }, 5000);

});
