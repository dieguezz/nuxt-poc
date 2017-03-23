$(document).ready(function() {

  $('.about-us-pictures').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    variableWidth: true
  });

  var $aboutIntroCover = $('.about-intro-cover');
  var $aboutIntroCoverHeight = $aboutIntroCover.height();
  var $aboutIntroTitle = $('#about-intro h2');
  var $aboutIntroTitleHeight = $aboutIntroTitle.height();
  var $aboutIntroSubtitle = $('#about-intro h4');
  var $aboutIntroSubtitleHeight = $aboutIntroSubtitle.height();
  var $aboutIntroScrollDown = $('#about-intro .scrolldown');
  var $aboutIntroScrollDownHeight = $aboutIntroScrollDown.height();

  $(window).scroll(function() {

    window.requestAnimationFrame(function() {
      var scrollTop = $(this).scrollTop();

      $aboutIntroCover.css({
        opacity: ((1 - ($aboutIntroCoverHeight - scrollTop) / $aboutIntroCoverHeight) * 0.8) + 0.75
      });

      $aboutIntroTitle.css({
        opacity: ((2 + ($aboutIntroTitleHeight - scrollTop) / $aboutIntroTitleHeight) * 1) - 1
      });

      $aboutIntroSubtitle.css({
        opacity: ((4 + ($aboutIntroSubtitleHeight - scrollTop) / $aboutIntroSubtitleHeight) * 1) - 1
      });

      $aboutIntroScrollDown.css({
        opacity: ((4 + ($aboutIntroScrollDownHeight - scrollTop) / $aboutIntroScrollDownHeight) * 1) - 1
      });

    });

  });

  $('.about-navigation li').click(function() {
    $('.about-navigation li.active').removeClass('active');
    $(this).addClass('active');
  });

  var $active;

  $('.how-to-circular-outter .how-to-unit').click(function() {
    var description = $(this).find('.how-to-description').html(),
      centralDescription = $('#central-description'),
      pos = $(this).attr('data-position');

    centralDescription.removeClass('active');

    if ($active) {
      $active.removeClass('active');
      $active.addClass('how-to-' + pos);
    }

    $(this).removeClass('moving moving-after how-to-' + pos);
    $(this).addClass('active');
    $('.how-to-unit:not(.active)').addClass('moving-after');
    $('.central-object').addClass('hide');
    $active = $(this);
    centralDescription.html(description);
    centralDescription.addClass('active');

    // $(this).find('.how-to-description').addClass('active');
  });

});
