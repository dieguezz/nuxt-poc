'use strict';
/* jshint newcap:false */
/* globals Rellax, ScrollReveal, Waypoint */

(function() {

  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;

  var position = $('.hero h1').offset().top;
  $(window).scroll(function(evt) {
    requestAnimationFrame(function() {
      $('.hero h1').css('opacity', (1 - ($('.hero h1').offset().top - position) * 0.005));
    });
  });

  $(document).ready(function() {

    var menuToggle = $('.menu-toggle');
    var body = $('body');

    function toggleMenu() {
      menuToggle.toggleClass('active');
      body.toggleClass('menu-open');
    }

    menuToggle.click(toggleMenu);
    $('.menu a').click(toggleMenu);

    $('.bio-opener-hayder').on('click', function() {
      $('.bio-hayder').toggleClass('show');
      $('body').toggleClass('people-bio-open');
      menuToggle.toggle();
    });
    $('.bio-opener-anthanh').on('click', function() {
      $('.bio-anthanh').toggleClass('show');
      $('body').toggleClass('people-bio-open');
      menuToggle.toggle();
    });
    $('.bio-opener-huibert').on('click', function() {
      $('.bio-huibert').toggleClass('show');
      $('body').toggleClass('people-bio-open');
      menuToggle.toggle();
    });
    $('.bio-opener-ruben').on('click', function() {
      $('.bio-ruben').toggleClass('show');
      $('body').toggleClass('people-bio-open');
      menuToggle.toggle();
    });
    $('.bio-opener-daniel').on('click', function() {
      $('.bio-daniel').toggleClass('show');
      $('body').toggleClass('people-bio-open');
      menuToggle.toggle();
    });
    $('.bio-opener-ismael').on('click', function() {
      $('.bio-ismael').toggleClass('show');
      $('body').toggleClass('people-bio-open');
      menuToggle.toggle();
    });
    $('.people-bio .bio-closer').on('click', function() {
      $('.people-bio').addClass('out');
      $('.people-bio .bio-content').addClass('out');
      $('.people-bio .bio-image').addClass('out');
      $('body').removeClass('people-bio-open');
      setTimeout(function() {
        menuToggle.toggle();
        $('.people-bio').removeClass('out');
        $('.people-bio').removeClass('show');
        $('.bio-image').removeClass('out');
        $('.bio-content').removeClass('out');
      }, 1200);
    });

    var rellax = new Rellax('.rellax');

    var sr = ScrollReveal();
    sr.reveal('.reveal', {
      easing: 'ease-in-out',
      scale: '1',
      reset: 'true',
      distance: '50px'
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
})();

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
});

$(document).ready(function() {
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
});
