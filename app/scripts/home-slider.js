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
    autoplaySpeed: 8000
  });

  // On before slide change
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

    $('.slider-navigation a').eq(currentSlide).removeClass('active');
    $('.slider-navigation a').eq(nextSlide).addClass('active');

    setTimeout(function() {
      $('.slider-unit').eq(currentSlide).find('.slider-letter').addClass('tofade');
    }, 0);

    setTimeout(function() {
      $('.slider-unit').eq(currentSlide).find('.slider-title').addClass('tofade');
    }, 150);

    setTimeout(function() {
      $('.slider-unit').eq(currentSlide).find('.slider-subtitle').addClass('tofade');
    }, 300);

    setTimeout(function() {
      $('.slider-unit').eq(currentSlide).find('a').addClass('tofade');
    }, 450);

    setTimeout(function() {
      $('.slider-unit').eq(nextSlide).find('.slider-letter').removeClass('tofade');
    }, 0);

    setTimeout(function() {
      $('.slider-unit').eq(nextSlide).find('.slider-title').removeClass('tofade');
    }, 150);

    setTimeout(function() {
      $('.slider-unit').eq(nextSlide).find('.slider-subtitle').removeClass('tofade');
    }, 300);

    setTimeout(function() {
      $('.slider-unit').eq(nextSlide).find('a').removeClass('tofade');
    }, 450);

    if (nextSlide === 2) {
      $('.slider-container').addClass('white').removeClass('black');
      $('header').addClass('inverse');
      $('.slider-navigation').addClass('inverse');
      $('.scroll-down svg').css('fill', '#171A1C');
    } else {
      $('.slider-container').addClass('black').removeClass('white');
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
