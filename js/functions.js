$(function() {
	smoothScroll(800);
});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}


$(window).scroll(function(){
      if($(document).scrollTop() > 0)

        {   
             $('container-nav').addClass('width80');
        }
      else{
             $('container-nav').removeClass('width80');

      }
    });





