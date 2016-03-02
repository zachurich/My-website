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

/* Jribbble Plugin by Tyler Gaw*/

$.jribbble.setToken('38098c5d1842fe025e4c7faceab8a27d94096b638fa6c4b1dca9851347d994da');

$.jribbble.users('zachurich').shots({per_page: 12}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });
  
  $('.shots').html(html.join(''));
});

$(function() {
    $(window).scroll( function(){
    
    /* fadeInBlock animation by Erik Larsson */
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 100;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
        }); 
    
    });
});




