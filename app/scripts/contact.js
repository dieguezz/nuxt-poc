'use strict';

/* Sending */
$(document).ready(function() {
  $('.sender').on('click', function(event) {
    event.preventDefault();
    var name = $('#contact #name').val();
    var email = $('#contact #email').val();
    var message = $('#contact #message').val();

    if (!name || !email || !message) {
      return;
    }

    $(this).addClass('sending');

    $.ajax({
      url: 'https://formspree.io/hello@etereo.io',
      method: 'POST',
      data: {
        '_subject': name,
        email: email,
        message: message
      },
      dataType: 'json'
    }).then(function() {
      setTimeout(function() {
        $(this).removeClass('sending');
      }, 2000);
    });

  });
});
