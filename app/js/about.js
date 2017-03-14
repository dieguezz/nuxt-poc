$(document).ready(function() {

    $('#join-us .central-content .button').click(function() {
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

var $active;

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop();
   
   // Get id of current scroll item
   $('#top-menu').find('a').each(function(){
     var href = $(this).attr('href'),
         $el = $('.scroll-anchor[href="' + href + '"]'),
         offset = $el.offset();

     if (offset.top >= 0) {
        if ($(this) !== $active) {
          if ($active) {
            $active.parent().removeClass('active');
          }

          $(this).parent().addClass('active');

          $active = $(this);

          return false;
        }
     }
   });          
});

$('.about-navigation li').click(function() {
    $('.about-navigation li.active').removeClass('active');
    $(this).addClass('active');
});

$('.how-to-circular-outter .how-to-1').click(function() {
    $(this).removeClass('moving');
    $(this).addClass('active');
    $('.central-object').addClass('hide');
    $('.how-to-description').addClass('active');
    $('.how-to-2').addClass('moving-after');
    $('.how-to-3').addClass('moving-after');
    $('.how-to-4').addClass('moving-after');
    $('.how-to-5').addClass('moving-after');
});
