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

    if ($('body.homepage').height() <= ($(window).height() + $(window).scrollTop())) {
      $('.scroll-down').css('opacity', '0');
      $('.claim-bottom').css('margin-bottom', '-75px');
      $('.video-cover').addClass('fade');
      setTimeout(function() {
        $('.homepage footer').css('z-index','10');
      }, 500);
    } else {
      $('.scroll-down').css('opacity', '1');
      $('.claim-bottom').css('margin-bottom', '-25px');
      $('.video-cover').removeClass('fade');
      $('.homepage footer').css('z-index','-1');
    }

  });

  $('.central-navigation ul li').hover(function() {
    $('.central-navigation ul li:first-child').removeClass('active')
  }, function() {
    $('.central-navigation ul li:first-child').addClass('active')
  });

  $('.central-navigation ul li.home-company').hover(function() {
    setTimeout(function() {
      $('.background-video').addClass('background-video-company')
      $('.background-video').css('display', 'block');
    }, 100);

  }, function() {
    $('.background-video').removeClass('background-video-company')
    $('.background-video').css('display', 'none');
  });

  $('.central-navigation ul li.home-people').hover(function() {
    setTimeout(function() {
      $('.background-video').addClass('background-video-people')
      $('.background-video').css('display', 'block');
    }, 100);
  }, function() {
    $('.background-video').removeClass('background-video-people')
    $('.background-video').css('display', 'none');
  });

});

/* Change Page Home [COMPANY] */
$(document).ready(function() {
  $('.central-navigation ul li.home-company').on('click', function() {
    $('.central-navigation ul li').not(this).addClass('tofade');
    $('.background-video').addClass('background-video-company')
    $('.background-video').css('display', 'block');

    setTimeout(function() {
      $('.central-navigation ul li.home-company').addClass('opening');
    }, 350);

    setTimeout(function() {
      window.location.href = '/company';
    }, 1090);

  });
});

/* Change Page Home [PEOPLE] */
$(document).ready(function() {
  $('.central-navigation ul li.home-people').on('click', function() {
    $('.central-navigation ul li').not(this).addClass('tofade');
    $('.background-video').addClass('background-video-people')
    $('.background-video').css('display', 'block');

    setTimeout(function() {
      $('.central-navigation ul li.home-people').addClass('opening');
    }, 350);

    setTimeout(function() {
      window.location.href = '/people';
    }, 1090);

  });
});





/*----------------------------------------------*/

/* Home Slider - Twotoforty */
$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('.slider-twotoforty-bg').css('background-position', x + 'px 0');
    }, 20);
})


/********* ---> BULLSHIT STARTS HERE!!! :( <---- ***********/

$(document).ready(function() {
    setTimeout(function() {
      $('.slider-bg').addClass('hide');
    }, 8500);
    setTimeout(function() {
      $('.slider-letter').addClass('tofade');
    }, 8650);
    setTimeout(function() {
      $('.slider-title').addClass('tofade');
    }, 8800);
    setTimeout(function() {
      $('.slider-subtitle').addClass('tofade');
    }, 8950);
    setTimeout(function() {
      $('.slider-unit a').addClass('tofade');
    }, 9100);
    setTimeout(function() {
      $('.slider-unit.twotoforty').addClass('hide').removeClass('show');
      $('.slider-unit.futureteaming').addClass('show').removeClass('hide');
      $('.slider-container').addClass('white').removeClass('black');
      $('.scroll-down svg').css('fill','#171A1C');
      $('header').addClass('inverse');
      $('.slider-navigation-twotoforty').removeClass('active');
      $('.slider-navigation-futureteaming').addClass('active');
      $('.slider-navigation').addClass('inverse');
      $('.slider-bg').removeClass('tofade');
      $('.slider-letter').removeClass('tofade');
      $('.slider-title').removeClass('tofade');
      $('.slider-subtitle').removeClass('tofade');
      $('.slider-unit a').removeClass('tofade');
    }, 9600);

    setTimeout(function() {
      $('.slider-bg').addClass('hide');
    }, 17600);
    setTimeout(function() {
      $('.slider-letter').addClass('tofade');
    }, 17750);
    setTimeout(function() {
      $('.slider-title').addClass('tofade');
    }, 17900);
    setTimeout(function() {
      $('.slider-subtitle').addClass('tofade');
    }, 18050);
    setTimeout(function() {
      $('.slider-unit a').addClass('tofade');
    }, 18200);
    setTimeout(function() {
      $('.slider-unit.futureteaming').addClass('hide').removeClass('show');
      $('.slider-unit.lledo').addClass('show').removeClass('hide');
      $('.slider-container').removeClass('white').addClass('black');
      $('.scroll-down svg').css('fill','#FFF');
      $('header').removeClass('inverse');
      $('.slider-navigation-futureteaming').removeClass('active');
      $('.slider-navigation-lledo').addClass('active');
      $('.slider-navigation').removeClass('inverse');
      $('.slider-bg').removeClass('tofade');
      $('.slider-letter').removeClass('tofade');
      $('.slider-title').removeClass('tofade');
      $('.slider-subtitle').removeClass('tofade');
      $('.slider-unit a').removeClass('tofade');
    }, 18700);

});
