$(document).ready(function() {


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

    /* AUTOPLAY SLIDER */

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


$(function() {
    var scrollDown = $(".scroll-down");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            scrollDown.css('opacity', '0');;
        } else {
            scrollDown.css('opacity', '1');
        }
    });
});


setInterval(function(){
   $('.ll-light').toggleClass('on');
},4000);

});
