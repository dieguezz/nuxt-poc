'use strict';

/* Home Intro */

$(document).ready(function() {

  var time0 = 0;
  var time1 = 2000;
  if (document.referrer.indexOf(document.location.origin) === -1) {
    $('.preloader').removeClass('hidden');
    time0 += 3000;
    time1 += 3000;
  }

  setTimeout(function() {
    $('body').css('background', '#171A1C');
    $('.preloader').removeClass('loading');
    $('.title-page').addClass('appear');
  }, time0);

  setTimeout(function() {
    $('.title-page').removeClass('appear');
    $('.title-page').addClass('appeared');
  }, time1);

});


/* HOME Option 3 */

$(document).ready(function() {
  var $horizontal = $('.central-navigation ul');

  $(window).scroll(function() {
    var s = $(this).scrollTop(),
      d = $(document).height(),
      c = $(this).height();

    var $scrollPercent = (s / (d - c));

    var position = ($scrollPercent * ($(document).width() - $horizontal.width()));

    $horizontal.css({
      'left': position
    });
  });
});


$(document).ready(function() {

  $(window).scroll(function() {
    if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
      $('.scroll-down').css('opacity', '0');
      $('.claim-bottom').css('margin-bottom', '-75px');
    } else {
      $('.scroll-down').css('opacity', '1');
      $('.claim-bottom').css('margin-bottom', '-25px');
    }
  });

  $('.central-navigation ul li').hover(
    function() {
      $('.central-navigation ul li:first-child').removeClass('active')
    },
    function() {
      $('.central-navigation ul li:first-child').addClass('active')
    }
  );

});
