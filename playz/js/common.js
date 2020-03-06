$(function(){

  // web menu effect
  $(".menu>li").mouseover(function(){
      $(this).children("ul").stop().slideDown(200);
  });
  $(".menu>li").mouseleave(function(){
      $(this).children("ul").stop().slideUp(200);
  });

  // mobile menu open
  $('.btn-gnb').click(function() {
    $(".m-gnb, .page-cover, html").addClass("open");  
    window.location.hash = "#open"; 
    return false;
  });
  window.onhashchange = function() {
    if (location.hash != "#open") {
      $(".m-gnb, .page-cover, html").removeClass("open");
    }
  };

  // mobile menu toggle
  $('.m-menu > li > a').click(function(){
    var $target = $(this).parent().children('ul');
    $('.m-menu > li > ul').hide();
    $target.slideDown();
    return false;
  });

});

