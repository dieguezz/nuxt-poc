$(document).ready(function() {
  var sr = ScrollReveal();
  sr.reveal('h3,h4,h5,p,section a', {
    origin: 'bottom',
    scale: 1,
    reset: true,
    distance: '50px',
    duration: 750,
    delay: 350
  });

  sr.reveal('#partners ul li', {
    scale: 1,
    reset: true,
    distance: '50px',
    duration: 1750
  }, 150);

  sr.reveal('#people ul li', {
    scale: 1,
    reset: true,
    distance: '50px',
    duration: 1750
  }, 150);

});
