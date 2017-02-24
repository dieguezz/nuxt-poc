'use strict';
/* globals Waypoint */

$(document).ready(function() {

    $('.etereotypes-about-you .sender').click(function() {
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

});