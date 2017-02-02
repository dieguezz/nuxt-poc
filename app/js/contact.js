'use strict';
/* globals Waypoint */

$(document).ready(function() {

  $('footer .contact-row-main a').on('click', function() {
    $('footer .contact-row-main a').addClass('open');
    $('.circular-transition').addClass('open');
    $('.contact-row-main').css('z-index', 2);
    setTimeout(function() {
      $('.contact-page').addClass('open');
      $('body').toggleClass('people-bio-open');
    }, 1200);
    setTimeout(function() {
      $('.contact-page .content').addClass('show');
    }, 1500);
  });

  $('.contact-page-closer').on('click', function() {
    $('.contact-page').addClass('out');
    setTimeout(function() {
      $('footer .contact-row-main a').removeClass('open');
      $('.circular-transition').removeClass('open');
      $('.contact-row-main').css('z-index', 0);
      $('.contact-page').removeClass('open');
      $('body').toggleClass('people-bio-open');
      $('.contact-page .content').removeClass('show');
      $('.contact-page').removeClass('out');
      $('.contact-page-thanks').removeClass('show');
      $('.contact-page-thanks-layer').removeClass('show');
      $('.sender').removeClass('sending');
    }, 500);
  });

  $('.close-thanks').on('click', function() {
    $('.contact-page').addClass('out');
    setTimeout(function() {
      $('footer .contact-row-main a').removeClass('open');
      $('.circular-transition').removeClass('open');
      $('.contact-row-main').css('z-index', 0);
      $('.contact-page').removeClass('open');
      $('body').toggleClass('people-bio-open');
      $('.contact-page .content').removeClass('show');
      $('.contact-page').removeClass('out');
      $('.contact-page-thanks').removeClass('show');
      $('.contact-page-thanks-layer').removeClass('show');
      $('.sender').removeClass('sending');
    }, 500);
  });

  $('#contact-form .sender').click(function() {
    $('.sender').addClass('sending');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'services/email.php', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() { //Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        setTimeout(function() {
          $('.contact-page-thanks').addClass('show');
          $('.contact-page-thanks-layer').addClass('show');
        }, 2000);
      }
    };
    xhr.send($.param({
      name: $('#contact-form #name').val(),
      email: $('#contact-form #email').val(),
      message: $('#contact-form #message').val()
    }));
  });

  var $scrolldown = $('.scrolldown');
  $(document).scroll(function() {
    $scrolldown.css({
      display: $(this).scrollTop() > 100 ? 'none' : 'block'
    });
  });

  var waypoint = new Waypoint({
    element: $('.people')[0],
    handler: function(direction) {
      switch (direction) {
        case 'down':
          $('.contact-row-main').css('z-index', 0);
          break;
        case 'up':
          $('.contact-row-main').css('z-index', -1);
          break;
      }
    }
  });

});
