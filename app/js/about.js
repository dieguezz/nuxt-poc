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

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    $('.about-intro-cover').css({
      opacity: function() {
        var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.75;
        return opacity;
      }
    });

    $('#about-intro h2').css({
      opacity: function() {
        var elementHeight = $(this).height(),
          opacity = ((2 + (elementHeight - scrollTop) / elementHeight) * 1) - 1;
        return opacity;
      }
    });

    $('#about-intro h4').css({
      opacity: function() {
        var elementHeight = $(this).height(),
          opacity = ((4 + (elementHeight - scrollTop) / elementHeight) * 1) - 1;
        return opacity;
      }
    });

    $('#about-intro .scrolldown').css({
      opacity: function() {
        var elementHeight = $(this).height(),
          opacity = ((4 + (elementHeight - scrollTop) / elementHeight) * 1) - 1;
        return opacity;
      }
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
