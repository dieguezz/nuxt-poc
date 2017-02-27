'use strict';
/* globals Waypoint */

$(document).ready(function() {

    $('.etereotypes-about-you .sender').click(function() {
        $('.sender').addClass('sending');
        setTimeout(function() {
            $('.etereotypes-about-you-form').addClass('hidden');
            $('.etereotypes-thanks').addClass('show');
            $('.sender').removeClass('sending');
        }, 2000);
        return;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'services/email.php', true);

        //Send the proper header information along with the request
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() { //Call a function when the state changes.
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                setTimeout(function() {
                    $('.etereotypes-thanks').addClass('show');
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

    $('.close-thanks').click(function() {
        $('.etereotypes-about-you-form').removeClass('hidden');
        $('.etereotypes-thanks').removeClass('show');
    })

});