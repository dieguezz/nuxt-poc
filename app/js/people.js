'use strict';

(function() {

    $(document).ready(function() {

        function toggleMenu(evt) {
            if (evt.delegateTarget.dataset.target === 'people') {
                $('header .menu-opener').toggleClass('open menu-opener-people');
                $('header .menu-opener').attr('data-target', 'menu');
                $('.people-bio').addClass('out');
                $('.people-bio .bio-content').addClass('out');
                $('.people-bio .bio-image').addClass('out');
                $('body').removeClass('people-bio-open');
                setTimeout(function() {
                    $('.people-bio').removeClass('out');
                    $('.people-bio').removeClass('show');
                    $('.bio-image').removeClass('out');
                    $('.bio-content').removeClass('out');
                }, 1200);
            }
        }

        $('.menu-opener').click(toggleMenu);

        function showBio(bioClass) {
            $('header .menu-opener').toggleClass('open menu-opener-people');
            $('header .menu-opener').attr('data-target', 'people');
            $(bioClass).toggleClass('show');
            $('body').toggleClass('people-bio-open');
        }

        $('.bio-opener-hayder').on('click', function() {
            showBio('.bio-hayder');
        });
        $('.bio-opener-anthanh').on('click', function() {
            showBio('.bio-anthanh');
        });
        $('.bio-opener-huibert').on('click', function() {
            showBio('.bio-huibert');
        });
        $('.bio-opener-ruben').on('click', function() {
            showBio('.bio-ruben');
        });
        $('.bio-opener-daniel').on('click', function() {
            showBio('.bio-daniel');
        });
        $('.bio-opener-ismael').on('click', function() {
            showBio('.bio-ismael');
        });

    });

})();