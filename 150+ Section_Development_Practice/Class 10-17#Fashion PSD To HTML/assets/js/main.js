
$(document).ready(function() {

	// Portfolio Masonry 
	$(".product-list").masonry();



	// Homepage Slide Carousel
	$(".homepage-slides").owlCarousel({
		items:1,
		dots:false,
		nav:true,
		navText: ["<i class='fas fa-long-arrow-alt-left'></i>" , "<i class='fas fa-long-arrow-alt-right'></i>"],
		autoplay:true,
		loop:true
	});


	// Promotion Carousel
	$(".promotion-box-carousel").owlCarousel({
		items:1,
		dots:true,
		nav:false,
		autoplay:true,
		loop:true
	});

});