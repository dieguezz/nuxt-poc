$(document).ready(function() {


  $('.slider-blog .next-slide').click(function(event) {
    event.preventDefault();
    $('.slider-blog').slick('slickNext');
  });

  /* AUTOPLAY SLIDER */

  $('.slider-blog').slick({
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
    $('.slider-blog .hidden').removeClass('hidden');
  }, 0);


});
