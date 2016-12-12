$(document).ready(function() {
  $('#Events').click(function(e) {
    e.preventDefault();
    $('.container').addClass('display');
    $('.form-container').removeClass('display');
    $('.say-whats-on').removeClass('display');
    window.scrollTo(0,0);
  });
  $('.close-button').click(function(e) {
    e.preventDefault();
    $('.container').removeClass('display');
    $('.form-container').addClass('display');
    $('.say-whats-on').addClass('display');
  });

  $('#Places').click(function(e) {
    e.preventDefault();
    $('.container').addClass('display');
    $('.form-container').removeClass('display');
    $('.add-a-location').removeClass('display');
    window.scrollTo(0,0);
  });
  $('.close-button').click(function(e) {
    e.preventDefault();
    $('.container').removeClass('display');
    $('.form-container').addClass('display');
    $('.add-a-location').addClass('display');
  });

  $('#Tips').click(function(e) {
    e.preventDefault();
    $('.container').addClass('display');
    $('.form-container').removeClass('display');
    $('.share-a-tip').removeClass('display');
    window.scrollTo(0,0);
  });
  $('.close-button').click(function(e) {
    e.preventDefault();
    $('.container').removeClass('display');
    $('.form-container').addClass('display');
    $('.share-a-tip').addClass('display');
  })
})
