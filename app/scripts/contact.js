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

  $('a[href^="mailto:"]').on('click', function(event) {
    window.location.href = event.currentTarget.href;
    return false;
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
      '_subject': 'Rock n roll!',
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
    var text;
    if ($('.extra').hasClass('show')) {
      text = i18njs.get('new-project.extra.title2');
    } else {
      text = i18njs.get('new-project.extra.title');
    }
    $(this).text(text);
  });

});
