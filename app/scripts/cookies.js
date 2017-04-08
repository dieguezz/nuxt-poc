$(document).ready(function() {
  if (!window.localStorage.getItem('cookies')) {
    setTimeout(function() {
      $('#home').addClass('cookies-active');
    }, 3000);
  }

  $('.close-cookies-bar').on('click', function(evt) {
    localStorage.setItem('cookies', true);
    $('.cookies-active').removeClass('cookies-active');
  });
});
