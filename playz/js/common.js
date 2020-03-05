$(function(){
  
  $(".menu>li").mouseover(function(){
      $(this).children("ul").stop().slideDown(200);
  });
  $(".menu>li").mouseleave(function(){
      $(this).children("ul").stop().slideUp(200);
  });


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

});

