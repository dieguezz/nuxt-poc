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

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'services/email.php', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() { //Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        setTimeout(function() {
          $(this).removeClass('sending');
        }, 2000);
      }
    };
    xhr.send($.param({
      name: name,
      email: email,
      message: message
    }));



  });
});
