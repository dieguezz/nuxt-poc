'use strict';

(function() {

  var menuToggle = $('.menu-toggle');
  var body = $('body');

  function toggleMenu() {
    menuToggle.toggleClass('active');
    body.toggleClass('menu-open');
  }

  menuToggle.click(toggleMenu);
  $('.menu a').click(toggleMenu);

})();

$(document).ready(function() {
  $('.bio-opener-hayder').on('click', function() {
   $('.bio-hayder').toggleClass('show');
   $('body').toggleClass('menu-open');
  });
  $('.bio-opener-anthanh').on('click', function() {
   $('.bio-anthanh').toggleClass('show');
   $('body').toggleClass('menu-open');
  });
  $('.people-bio .bio-closer').on('click', function() {
   $('.people-bio').removeClass('show');
   $('body').removeClass('menu-open');
  });
});
