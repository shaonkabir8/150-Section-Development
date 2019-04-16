jQuery(document).ready(function($) {
    
	// Active Class Changing
	$('.portfolio-list li').on('click',function() {
		$('.portfolio-list li').removeClass('active');
		$(this).addClass('active');


		// Isotope Filtering Activation

		  	var selector = $(this).attr('data-filter');
		    $(".portfolio-item").isotope({
		        filter: selector
		    });


	});



});


