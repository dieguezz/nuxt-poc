'use strict';

/* Scroll to Top before load */

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

/* Reveal Titles */
$(document).ready(function() {
  setTimeout(function() {

    $('.title-page').addClass('appear');
  }, 1000);

  setTimeout(function() {
    $('.title-page').removeClass('appear');
    $('.title-page').addClass('appeared');
  }, 3000);
});

/* Scroll Opacity */

$(window).on('scroll', function() {
  $('.fade-scroll').css({
    'opacity': (250 - $(window).scrollTop()) / 250
  });
  $('.scroll-appear').css({
    'opacity': (-150 + $(window).scrollTop()) / 150
  });
});

$(document).ready(function() {
  var $white = $('.white');
  var $black = $('.black');

  $white.waypoint(function(direction) {
    if (direction === 'down') {
      $("header").addClass('inverse');
    } else {
      $("header").removeClass('inverse');
    }
  }, {
    offset: '10%'
  });

  $white.waypoint(function(direction) {
    if (direction === 'down') {
      $(".menu-navigation").addClass('inverse');
    } else {
      $(".menu-navigation").removeClass('inverse');
    }
  }, {
    offset: '100%'
  });

  $black.waypoint(function(direction) {
    if (direction === 'down') {
      $("header").removeClass('inverse');
      $(".menu-navigation").removeClass('inverse');
    } else {
      $("header").addClass('inverse');
      $(".menu-navigation").addClass('inverse');
    }
  }, {
    offset: '10%'
  });

  $black.waypoint(function(direction) {
    if (direction === 'down') {
      $(".menu-navigation").removeClass('inverse');
    } else {
      $(".menu-navigation").addClass('inverse');
    }
  }, {
    offset: '100%'
  });

});

/* Open Bio */

// $(document).ready(function() {
//   $('.open-bio').on('click', function() {
//     $('.people-bio-container').addClass('show');
//     $('.people-bio-container').removeClass('hide');
//   });
// });

// $(document).ready(function() {
//   $('.close-bio').on('click', function() {
//     $('.people-bio-container').removeClass('show');
//     $('.people-bio-container').addClass('hide');
//   });
// });
