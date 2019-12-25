// init Masonry
var $grid = $('.grid').masonry({
  // options...
});

// layout Masonry after each image loads
/*
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
*/



document.onreadystatechange = function () {
     if (document.readyState == "complete") {
        var container = document.querySelector('.grid');
        var msnry = new Masonry( container );
        msnry.reloadItems();
		
		/*
		var $sub_page = $('.sub_page');
		$sub_page.height($sub_page.height());
		*/
   }
}  

