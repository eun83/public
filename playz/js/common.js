$(function(){
  $(".menu>li").mouseover(function(){
      $(this).children("ul").stop().slideDown(200);
  });
  $(".menu>li").mouseleave(function(){
      $(this).children("ul").stop().slideUp(200);
  });
});