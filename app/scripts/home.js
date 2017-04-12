'use strict';

/* Home Intro */

$(document).ready(function() {

  var time0 = 0;
  var time1 = 2000;
  if (document.referrer.indexOf(document.location.origin) === -1) {
    $('.preloader').removeClass('hidden');
    time0 += 3000;
    time1 += 3000;
  }

  setTimeout(function() {
    $('body').css('background', '#171A1C');
    $('.preloader').removeClass('loading');
    $('.title-page').addClass('appear');
  }, time0);

  setTimeout(function() {
    $('.title-page').removeClass('appear');
    $('.title-page').addClass('appeared');
  }, time1);

});
