'use strict';
/* globals Waypoint */

$(document).ready(function() {
  $('footer .contact-row-main a').on('click', function() {
    $('footer .contact-row-main a').addClass('open');
    $('.circular-transition').addClass('open');
    $('.contact-row-main').css('z-index', 2);
    setTimeout(function() {
      $('.contact-page').addClass('open');
      $('body').toggleClass('people-bio-open');
    }, 1200);
    setTimeout(function() {
      $('.contact-page .content').addClass('show');
    }, 1500);
  });

  $('.contact-page-closer').on('click', function() {
    $('.contact-page').addClass('out');
    setTimeout(function() {
      $('footer .contact-row-main a').removeClass('open');
      $('.circular-transition').removeClass('open');
      $('.contact-row-main').css('z-index', 0);
      $('.contact-page').removeClass('open');
      $('body').toggleClass('people-bio-open');
      $('.contact-page .content').removeClass('show');
      $('.contact-page').removeClass('out');
    }, 500);
  });
  var $scrolldown = $('.scrolldown');
  $(document).scroll(function() {
    $scrolldown.css({
      display: $(this).scrollTop() > 100 ? 'none' : 'block'
    });
  });

  var waypoint = new Waypoint({
    element: $('.people')[0],
    handler: function(direction) {
      switch (direction) {
        case 'down':
          $('.contact-row-main').css('z-index', 0);
          break;
        case 'up':
          $('.contact-row-main').css('z-index', -1);
          break;
      }
    }
  });

});
