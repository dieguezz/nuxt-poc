'use strict';
$('h1').hover(
  function() {
    $('body').removeClass('dark');
  },
  function() {
    $('body').addClass('dark');
  }
);
