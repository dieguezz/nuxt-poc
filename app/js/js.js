'use strict';

(function() {

  var menuToggle = $('.menu-toggle');
  var body = $('body');

  function toggleMenu() {
    menuToggle.toggleClass('active');
    body.toggleClass('menu-open');
  }

  menuToggle.click(toggleMenu);
  $('.menu a').click(toggleMenu);

})();
