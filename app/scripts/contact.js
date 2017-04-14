'use strict';

/* Sending */
$(document).ready(function() {

  var inputs = $('#new-project input, #new-project textarea');

  inputs.each(function(index, elem) {
    $(elem).keyup(function() {
      if (this.checkValidity()) {
        $(this).removeClass('invalid');
      } else {
        $(this).addClass('invalid');
      }
    });
  });

  $('.sender').on('click', function(event) {
    event.preventDefault();

    // // mock
    // $(this).addClass('sending');
    // setTimeout(function() {
    //   $('#sended-form').addClass('sended');
    // }, 2500);
    // setTimeout(function() {
    //   $('header').addClass('inverse');
    //   $('body').addClass('lock');
    // }, 3000);
    // return;

    var validity = [];
    var data = {
      '_subject': 'Let\'s rock n roll!',
    };

    inputs.each(function(index, elem) {
      validity.push(elem.checkValidity());
      var $elem = $(elem);
      if (!elem.checkValidity()) {
        $elem.addClass('invalid');
      }
      if ($elem.val()) {
        data[elem.name] = $elem.val();
      }
    });

    var isValid = validity.reduce(function(total, value) {
      return total && value;
    }, true);

    if (!isValid) {
      return;
    }

    $(this).addClass('sending');

    $.ajax({
      url: 'https://formspree.io/hello@etereo.io',
      method: 'POST',
      data: data,
      dataType: 'json'
    }).then(function() {
      setTimeout(function() {
        $(this).removeClass('sending');
        $('#sended-form').addClass('sended');
      }, 2000);
    });

  });

  /* Open Extra Questions */
  $('.extra-questions').on('click', function() {
    $('.extra').toggleClass('show');
    //$(this).text("No sorry, maybe later.");

    if ($(this).text() == "I don't have time enough to answer the optional ones ") {
      $(this).text('Do you mind answering two more questions? (optional)');
    } else {
      $(this).text("I don't have time enough to answer the optional ones ");
    }
  });

});
