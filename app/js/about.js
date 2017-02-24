$(document).ready(function() {

    $('.join-us-apply').click(function() {
        $('.join-us-main').toggleClass('join-us-etereotypes-open');
        $('.join-us-etereotypes').toggleClass('join-us-etereotypes-open');
        $('.join-us-apply-closer').toggleClass('join-us-etereotypes-open');
        $('#join-us').toggleClass('join-us-etereotypes-open');
        $('.global-wrapper').toggleClass('join-us-etereotypes-open');
    });

    $('.join-us-apply-closer').click(function() {
        $('.join-us-main').toggleClass('join-us-etereotypes-open');
        $('.join-us-etereotypes').toggleClass('join-us-etereotypes-open');
        $('.join-us-apply-closer').toggleClass('join-us-etereotypes-open');
        $('#join-us').toggleClass('join-us-etereotypes-open');
        $('.global-wrapper').toggleClass('join-us-etereotypes-open');
    });

    $('.about-us-pictures').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        variableWidth: true
    });

});