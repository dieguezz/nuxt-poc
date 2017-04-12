'use strict';

/* Scroll to Top before load */

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
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
    offset: '90%'
  });

  $black.waypoint(function(direction) {
    if (direction === 'down') {
      $("header").removeClass('inverse');
    } else {
      $("header").addClass('inverse');
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
    offset: '90%'
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
