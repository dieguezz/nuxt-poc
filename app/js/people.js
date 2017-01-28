'use strict';

(function() {

  $(document).ready(function() {

    var menuToggle = $('.menu-toggle');

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

  });

})();
