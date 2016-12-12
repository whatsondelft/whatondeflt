// open mobile menu
$(document).ready(function() {
  $('.mobile-nav-toggle').click(function(e){
    e.preventDefault();
    $('.animate').slideToggle();
    $('.navigation,.mobile-nav-toggle').toggleClass('is-open');
  });
  $('.close').click(function(e){
    e.preventDefault();
    $('.animate').slideToggle();
    $('.navigation,.mobile-nav-toggle').removeClass('is-open');
  })
})
