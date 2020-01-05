// Show & Hide White Navigation Bar
$(function() {
  showHideNav();

  $(window).scroll(function() {
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav
      $('nav').addClass('white-nav');
      // Show dark logo
      $('.navbar-brand img').attr('src', 'img/logo_dark.png');
    } else {
      // Hide white nav
      $('nav').removeClass('white-nav');
      // Show white logo
      $('.navbar-brand img').attr('src', 'img/logo.png');
    }
  }
});
