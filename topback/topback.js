$(function(){
  $('.back').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});
