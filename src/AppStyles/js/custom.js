$(document).ready(function() {
  $('#slider1').owlCarousel({
    loop: true,
    center: true,
    smartSpeed: 2000,
    fluidSpeed: 500,
    margin: 30,
    nav: true,
    autoplay: false,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
   $('#slider2').owlCarousel({
    loop: true,
    smartSpeed: 2000,
    fluidSpeed: 500,
    margin: 10,
    nav: true,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
});
$(document).ready(function () {
  $('.moreless-button').click(function() {
    $('.moretext').slideToggle();
      if ($('.moreless-button').text() == "Read More") {
        $(this).text("Read Less")
      } else {
        $(this).text("Read More")
      }
    });
  $('a.moreless-button').click(function(e)
    {
    // Special stuff to do when this link is clicked...

    // Cancel the default action
    e.preventDefault();
    });

});
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
