'use strict';

/* Home Intro */

var throttle = function(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};

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
  var $horizontalMain = $('.black');
  var previousScroll = $(document).scrollTop();
  var edge = false;
  var silent = false;
  var manualScroll = false;

  $('.black').scroll(throttle(function(e){
    if (!manualScroll) {
      $(window).scrollTop(e.currentTarget.scrollLeft);
      silent = true;
      manualScroll = false;
    }
  }, 500));

  $('.black').scroll(function(e){
    if (silent) {
      silent = false;
      return;
    }

    var left = e.currentTarget.scrollLeft;

    if (($(document).width() + left) >= $horizontal.width() && !edge) {
      edge = true;
      console.log('edge');
      $('.scroll-down').css('opacity', '0');
      $('.claim-bottom').css('margin-bottom', '-75px');
      $('.video-cover').addClass('fade');
    }
    else if (($(document).width() + left) < $horizontal.width()) {
      edge = false;
      $('.scroll-down').css('opacity', '1');
      $('.claim-bottom').css('margin-bottom', '-25px');
      $('.video-cover').removeClass('fade');
    }
  });

  $(window).scroll(function() {
    if (silent) {
      silent = false;
      return;
    }

    var s = $(this).scrollTop(),
        horizontalScroll = $horizontalMain.scrollLeft(),
        d = $(document).height(),
        c = $(this).height();

    var offset = (s - previousScroll);

    previousScroll = s;

    var newLeft = horizontalScroll + offset;


    $horizontalMain.scrollLeft(newLeft);

    silent = true;
    manualScroll = true;

    if (($(document).width() + newLeft) >= ($horizontal.width() - 20) && !edge) {
      edge = true;
      $('.scroll-down').css('opacity', '0');
      $('.claim-bottom').css('margin-bottom', '-75px');
      $('.video-cover').addClass('fade');
    } else if ($('body').height() > ($(window).height() + $(window).scrollTop())){
      edge = false;
      $('.scroll-down').css('opacity', '1');
      $('.claim-bottom').css('margin-bottom', '-25px');
      $('.video-cover').removeClass('fade');
    }


  });

});
