/* Scroll to Top before load */

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

/* Home Intro */

$(document).ready(function() {
  setTimeout(function() {
    $('body').css('background', '#171A1C');
    $('.preloader').removeClass('loading');
    $('#home').addClass('cookies-active');
    $('.home-intro h2').addClass('appear');
  }, 3000);
});

$(document).ready(function() {
  setTimeout(function() {
    $('.home-intro h2').removeClass('appear');
    $('.home-intro h2').addClass('appeared');
  }, 5000);
});


/* Cookies Bar */

$(document).ready(function() {
  $('.close-cookies-bar').on('click', function(evt) {
    $('.cookies-active').removeClass('cookies-active');
  });
});

/* Mobile menu */

$(document).ready(function() {
  $('.navigation-mobile').on('click', function() {
    $('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('appear');
    $('header').toggleClass('mobile-appear');
  });
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

/* Smooth Scroll in same page*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
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

  $black.waypoint(function(direction) {
    if (direction === 'down') {
      $("header").removeClass('inverse');
    } else {
      $("header").addClass('inverse');
    }
  }, {
    offset: '10%'
  });

});

/* Page transitions */

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function(url) {
      window.location.href = url;
    }
  });
});
