'use strict';

$(document).ready(function() {

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    function toggleMenu(evt) {
        if (evt.delegateTarget.dataset.target === 'menu') {
            $('.menu-opener').toggleClass('open');
            $('.menu').toggleClass('menu-active');
            $('.global-wrapper').toggleClass('menu-active');
            $('body').toggleClass('menu-active');
        }
    }

    $('.menu-opener').click(toggleMenu);

    $('.menu-home').hover(
        function() { $('.cover-home').addClass('hover'); },
        function() { $('.cover-home').removeClass('hover'); }
    );
    $('.menu-about').hover(
        function() { $('.cover-about').addClass('hover'); },
        function() { $('.cover-about').removeClass('hover'); }
    );
    $('.menu-join').hover(
        function() { $('.cover-join').addClass('hover'); },
        function() { $('.cover-join').removeClass('hover'); }
    );
    $('.menu-contact').hover(
        function() { $('.cover-contact').addClass('hover'); },
        function() { $('.cover-contact').removeClass('hover'); }
    );
    $('.menu-blog').hover(
        function() { $('.cover-blog').addClass('hover'); },
        function() { $('.cover-blog').removeClass('hover'); }
    );

    if (location.hash === '#join-us') {
        window.scrollTo(0, document.body.scrollHeight);
    }

    $('a[href$="#join-us"]').click(function() {
        toggleMenu();
        location.hash = '#join-us';
        $('html, body').animate({
            scrollTop: document.body.scrollHeight
        }, 1000);
    });

});