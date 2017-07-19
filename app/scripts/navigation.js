'use strict';

/* Smooth Scroll in same page*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname) {

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
});

/* Mobile menu */

$(document).ready(function() {
  $('.navigation-mobile').on('click', function() {
    $('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('appear');
    $('header').toggleClass('mobile-appear');
  });
});

$(document).ready(function() {

  var $active;
  var selectMenuItem = function($menuItem) {
    if ($active) {
      $active.parent().removeClass('active');
    }
    $menuItem.parent().addClass('active');
    $active = $menuItem;
    return false;
  };

  var waypoints = [];

  // Get id of current scroll item
  $('#top-menu').find('a').each(function() {
    var elem = $(this);
    var href = elem.attr('href');
    var waypoint = new Waypoint({
      element: $('*[data-menu-navigation="' + href + '"]')[0],
      handler: function() {
        selectMenuItem(elem);
      },
      offset: '100%'
    });
    waypoints.push(waypoint);
  });

});
