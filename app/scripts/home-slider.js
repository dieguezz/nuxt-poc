$(document).ready(function() {

  /* Home Slider - Twotoforty */
  $(function() {
    var x = 0;
    setInterval(function() {
      x -= 1;
      $('.slider-twotoforty-bg').css('background-position', x + 'px 0');
    }, 20);
  });

  $('.slider-navigation a').click(function(event) {
    event.preventDefault();
    $('.slider').slick('slickGoTo', $(event.target).data('slide'));
  });

  /* AUTOPLAY SLIDER */

  $('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 8000
  });

  // hack to prevent slide initialization animation
  setTimeout(function() {
    $('.slider .hidden').removeClass('hidden');
  }, 0);

  // On before slide change
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

    $('.slider-navigation a').eq(currentSlide).removeClass('active');
    $('.slider-navigation a').eq(nextSlide).addClass('active');

    $('.slider-unit').find('.slider-letter').addClass('tofade');
    $('.slider-unit').find('.slider-title').addClass('tofade');
    $('.slider-unit').find('.slider-subtitle').addClass('tofade');
    $('.slider-unit').find('.slider-bg').addClass('tofade');
    $('.slider-unit').find('a').addClass('tofade');
    $('.slider-unit').eq(nextSlide).find('.slider-letter').removeClass('tofade');
    $('.slider-unit').eq(nextSlide).find('.slider-title').removeClass('tofade');
    $('.slider-unit').eq(nextSlide).find('.slider-subtitle').removeClass('tofade');
    $('.slider-unit').eq(nextSlide).find('.slider-bg').removeClass('tofade');
    $('.slider-unit').eq(nextSlide).find('a').removeClass('tofade');

    if (nextSlide === 2) {
      $('header').addClass('inverse');
      $('.slider-navigation').addClass('inverse');
      $('.scroll-down svg').css('fill', '#171A1C');
    } else {
      $('.lledo .ll-logo').addClass('hidden');
      $('.twotoforty .slider-bg').addClass('hidden');
      if (nextSlide === 1) {
        setTimeout(function() {
          $('.twotoforty .slider-bg').removeClass('hidden');
        }, 0);
      }
      if (nextSlide === 3) {
        setTimeout(function() {
          $('.lledo .ll-logo').removeClass('hidden');
        }, 2000);
      }
      $('header').removeClass('inverse');
      $('.slider-navigation').removeClass('inverse');
      $('.scroll-down svg').css('fill', '#FFF');
    }

  });

  var scrollDown = $(".scroll-down");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      scrollDown.css('opacity', '0');;
    } else {
      scrollDown.css('opacity', '1');
    }
  });

  setInterval(function() {
    $('.ll-light').toggleClass('on');
  }, 4000);

});
