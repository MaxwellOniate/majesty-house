// Remove preloader once page is fully loaded.
$(window).on('load', function() {
  $('.status').fadeOut();
  $('.preloader')
    .delay(350)
    .fadeOut('slow');
});
