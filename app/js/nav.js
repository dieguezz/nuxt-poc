'use strict';

$(document).ready(function() {

  var menuToggle = $('.menu-toggle');
  var body = $('body');

  function toggleMenu() {
    menuToggle.toggleClass('active');
    body.toggleClass('menu-open');
  }

  menuToggle.click(toggleMenu);
  $('.menu a').click(toggleMenu);

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});
