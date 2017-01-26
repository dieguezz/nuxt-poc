'use strict';
/* jshint newcap:false */
/* globals Rellax, ScrollReveal */

$(document).ready(function() {

  var rellax = new Rellax('.rellax');

  var sr = ScrollReveal();
  sr.reveal('.reveal', {
    easing: 'ease-in-out',
    scale: '1',
    reset: 'true',
    distance: '50px'
  });

});
