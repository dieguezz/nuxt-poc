'use strict';

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

/* Open New Project */
$(document).ready(function() {

  /* Scroll to Top before load */

  var $window = $(window);

  $window.on('beforeunload', function() {
    $window.scrollTop(0);
  });

  /* Scroll Opacity */

  var $fadeScroll = $('.fade-scroll');
  var $scrollAppear = $('.scroll-appear');
  $window.on('scroll', function() {
    requestAnimationFrame(function() {
      $fadeScroll.css({
        'opacity': (250 - $window.scrollTop()) / 250
      });
    });
    requestAnimationFrame(function() {
      $scrollAppear.css({
        'opacity': (-150 + $window.scrollTop()) / 150
      });
    });
  });

  // no waypoint black/white in home-page
  if (!$('.home-page').length) {
    var $white = $('.white');
    var $black = $('.black');
    var $pictures = $('#pictures');
    var $header = $('header');
    var $menuNavigation = $('.menu-navigation');
    $white.waypoint(function(direction) {
      if (direction === 'down') {
        $header.addClass('inverse');
      } else {
        $header.removeClass('inverse');
      }
    }, {
      offset: '10%'
    });

    $white.waypoint(function(direction) {
      if (direction === 'down') {
        $menuNavigation.addClass('inverse');
      } else {
        $menuNavigation.removeClass('inverse');
      }
    }, {
      offset: '90%'
    });

    $black.waypoint(function(direction) {
      if (direction === 'down') {
        $header.removeClass('inverse');
      } else {
        $header.addClass('inverse');
      }
    }, {
      offset: '10%'
    });

    $black.waypoint(function(direction) {
      if (direction === 'down') {
        $menuNavigation.removeClass('inverse');
      } else {
        $menuNavigation.addClass('inverse');
      }
    }, {
      offset: '90%'
    });
  }

  $('.new-business').on('click', function() {
    $('.contact-page h3,.contact-page svg,.general-contact-unit,.mars-map').addClass('tofade');

    setTimeout(function() {
      $('.new-business p, .new-business a, .new-business span').addClass('opening');
    }, 0);

    setTimeout(function() {
      $('.new-business').addClass('opening');
    }, 450);

    setTimeout(function() {
      window.location.href = '/new-project';
    }, 800);

  });

  /* Initiate FastClic */
  FastClick.attach(document.body);

  $('a[disabled]').click(function(event) {
    event.preventDefault();
  });

});

/*Blog Fixed Background with Cover*/
$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.slider-blog .slider-unit').css('background-position', 'left ' + ((scrolledY)) + 'px');
});

$('.blog-entry-page header').addClass('inverse');
$('.blog-entry-page p').addClass('reveal');
$('.blog-entry-page h3').addClass('reveal');
//$('.blog-entry-page .navigation').css('display','none');
//$('.blog-entry-page .navigation-mobile').css('display','block');
