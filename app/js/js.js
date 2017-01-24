'use strict';
/* jshint newcap:false */
/* globals Rellax, ScrollReveal, Waypoint */

(function() {

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
    $('.people-bio .bio-closer').on('click', function() {
      $('.people-bio .bio-content').addClass('out');
      $('.people-bio .bio-image').addClass('out');
      $('body').removeClass('people-bio-open');
      setTimeout(function() {
        menuToggle.toggle();
        $('.people-bio').removeClass('show');
        $('.bio-image').removeClass('out');
        $('.bio-content').removeClass('out');
      }, 1500);
    });

    var rellax = new Rellax('.rellax');

    var sr = ScrollReveal();
    sr.reveal('.reveal', {
      easing: 'ease-in-out', scale:'1', reset: 'true', distance: '50px'
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
