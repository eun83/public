// TAB
$(function () {   
  tab('.tab',0);
});

function tab(e, num){
   var num = num || 0;
   var menu = $(e).children();
   var con = $(e+'-con').children();
   var select = $(menu).eq(num);
   var i = num;

   select.addClass('active');
   con.eq(num).show();

   menu.click(function(){
       if(select!==null){
           select.removeClass("active");
           con.eq(i).hide();
       }

       select = $(this);   
       i = $(this).index();

       select.addClass('active');
       con.eq(i).show();
   });
}