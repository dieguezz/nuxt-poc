'use strict';
/* globals Waypoint */

$(document).ready(function() {

  $('.footer-form .sender').click(function() {
    $('.sender').addClass('sending');
    setTimeout(function() {
      $('.sender').removeClass('sending');
      $('.footer-form form').addClass('hidden');
      $('.footer-form .form-thanks').addClass('show');
    }, 2000);
    return;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'services/email.php', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() { //Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        setTimeout(function() {
          $('.footer-form form').addClass('hidden');
          $('.footer-form .form-thanks').addClass('show');
          $('.sender').removeClass('sending');
        }, 2000);
      }
    };
    xhr.send($.param({
      name: $('#contact-form #name').val(),
      email: $('#contact-form #email').val(),
      message: $('#contact-form #message').val()
    }));
  });

  $('.form-thanks-close').click(function() {
    $('.footer-form form').removeClass('hidden');
    $('.footer-form .form-thanks').removeClass('show');
  });

});
