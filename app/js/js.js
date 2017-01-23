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
   $('body').toggleClass('people-bio-open');
  });
  $('.bio-opener-anthanh').on('click', function() {
   $('.bio-anthanh').toggleClass('show');
   $('body').toggleClass('people-bio-open');
  });
  $('.people-bio .bio-closer').on('click', function() {
   $('.people-bio .bio-content').addClass('out');
   $('.people-bio .bio-image').addClass('out');
   $('body').removeClass('people-bio-open');
   setTimeout(function(){
    $('.people-bio').removeClass('show');
    $('.bio-image').removeClass('out');
    $('.bio-content').removeClass('out');
  },1500);
  });
});
