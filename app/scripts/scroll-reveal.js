$(document).ready(function() {
  var sr = ScrollReveal();

  sr.reveal('.reveal', {
    origin: 'bottom',
    scale: 1,
    reset: false,
    distance: '50px',
    duration: 750,
    delay: 350
  });

  sr.reveal('.reveal2', {
    scale: 1,
    reset: false,
    distance: '50px',
    duration: 1750
  }, 150);

});
