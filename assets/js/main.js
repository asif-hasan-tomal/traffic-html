(function ($) {
	"use strict";

	// You can write custom jquery code here
	 jQuery(document).ready(function($){
		$(".logo-carousel").owlCarousel({
			items:6,
			margin:30,
		  	loop:true,
			dots:false,
			nav:false,
			autoplay: true,
		});

	 	$(".case-studies-carousel").owlCarousel({
	 		items:3,
	 		margin:30,
			loop:true,
	 		dots:true,
	 		nav:false,
	 		autoplay: true,
		 });

		 
		 $(".homepage-slide").owlCarousel({
			items:1,
		  	loop:true,
			dots:true,
			nav:true,
			navText:["<i class='fas fa-arrow-left'></i>" , "<i class='fas fa-arrow-right'></i>"],
		});

	 	$(".testimonial-carousel").owlCarousel({
	 		items:1,
			loop:true,
			dots:true,
	 		nav:false,
	 		autoplay: true,
		});

		
		$(".index2-testimonial").owlCarousel({
			items:1,
		    loop:true,
		    dots:true,
			nav:false,
			autoplay: true,
	   });

	   $(".single-testimonail-box").hover(function(){
			$(".single-testimonail-box").removeClass('active');
			$(this).addClass('active');
	   });

	   $(".vedio-play-icons").magnificPopup({
		   type:'vedio'
	   })

	});


	$(".menu-trigger").on('click',function() {
		$(".off-canvas-menu").addClass("show-off-canvas-menu");
		$(".menu-overlay").addClass("active");
	});	

	$(".menu-close").on('click',function() {
		$(".off-canvas-menu").removeClass("show-off-canvas-menu");
		$(".menu-overlay").removeClass("active");
	});

}(jQuery));	