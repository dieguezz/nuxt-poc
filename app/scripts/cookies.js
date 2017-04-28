'use strict';

$(document).ready(function() {
  if (!window.localStorage.getItem('cookies')) {
    setTimeout(function() {
      $('#home, .contact-page, .home-page').addClass('cookies-active');
    }, 3000);
  }

  $('.close-cookies-bar').on('click', function(evt) {
    $('.cookies-active').removeClass('cookies-active');
  });

  $('.link-ok').on('click', function(evt) {
    localStorage.setItem('cookies', true);
    $('.cookies-active').removeClass('cookies-active');
  });
});
