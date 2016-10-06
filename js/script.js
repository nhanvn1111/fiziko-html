/*  Table of Contents 
01. MENU ACTIVATION
02. GALLERY JAVASCRIPT
03. FITVIDES RESPONSIVE VIDEOS
04. MOBILE SELECT MENU
05. prettyPhoto Activation
06. Form Validation
07. Light Shortcodes
08. Opacity & Backstretch
09. Isotope
10. Counter
*/


jQuery(document).ready(function($) {


/*
=============================================== 01. MENU ACTIVATION  ===============================================
*/

	 'use strict';
	jQuery("ul.sf-menu").supersubs({ 
	        minWidth:    8,   // minimum width of sub-menus in em units 
	        maxWidth:    25,   // maximum width of sub-menus in em units 
	        extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
	                           // due to slight rounding differences and font-family 
	    }).superfish({ 
			animationOut:  {opacity:'show'},
			speed:         200,           // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
			speedOut:      'fast',
			autoArrows:    true,               // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance 
			dropShadows:   false,               // completely disable drop shadows by setting this to false 
			delay:     400               // 1.2 second delay on mouseout 
		});



/*
=============================================== 02. GALLERY JAVASCRIPT  ===============================================
*/

    $('.gallery-progression').flexslider({
		animation: "fade",      
		slideDirection: "horizontal", 
		slideshow: false,         
		slideshowSpeed: 7000,  
		animationDuration: 200,        
		directionNav: true,             
		controlNav: true               
    });
	
	
	$('.fiziko-slider-pro').flexslider({
		animation: "fade",      
		slideDirection: "horizontal", 
		slideshow: false,         
		slideshowSpeed: 7000,  
		animationDuration: 200,        
		directionNav: false,             
		controlNav: true               
    });


/*
=============================================== 03. FITVIDES RESPONSIVE VIDEOS  ===============================================
*/

	$("body").fitVids();



/*
=============================================== 04. MOBILE SELECT MENU  ===============================================
*/

	$('.sf-menu').mobileMenu({
	    defaultText: 'Navigate to...',
	    className: 'select-menu',
	    subMenuDash: '&ndash;&ndash;'
	});


/*
=============================================== 05. prettyPhoto Activation  ===============================================
*/

	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
		slideshow: 5000, /* false OR interval time in ms */
		autoplay_slideshow: false, /* true/false */
		opacity: 0.80, /* Value between 0 and 1 */
		show_title: false, /* true/false */
		allow_resize: true, /* Resize the photos bigger than viewport. true/false */
		default_width: 500,
		default_height: 344,
		counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
		theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		horizontal_padding: 20, /* The padding on each side of the picture */
		hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
		wmode: 'opaque', /* Set the flash wmode attribute */
		autoplay: false, /* Automatically start videos: True/False */
		modal: false, /* If set to true, only the close button will close the window */
		deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
		overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
		keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
		ie6_fallback: true,
		social_tools: '' /* html or false to disable  <div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div> */
	});


/*
=============================================== 06. Form Validation  ===============================================
*/


	$("#CommentForm").validate();
		
	
/*
=============================================== 07. Light Shortcodes  ===============================================
*/
	
	
	// Accordion
	$(".ls-sc-accordion").accordion({heightStyle: "content"});
	
	// Toggle
	$(".ls-sc-toggle-trigger").click(function(){$(this).toggleClass("active").next().slideToggle("fast");return false; });
	
	// Tabs
	$( ".ls-sc-tabs" ).tabs();
	




/*
=============================================== 08. Opacity & Backstretch ===============================================
*/	
	$('#page-title').transify({opacityOrig:0.80, percentWidth:'100%'});
	$('.footer-highlight').transify({opacityOrig:0.80, percentWidth:'100%'});
	
	$("#page-title-contact").backstretch([ "images/demo/contact-map.jpg" ],{ fade: 750, });
	$("#movie-about").backstretch(["images/demo/bigstock-Portrait-of-smiling-women-doin-52836121-blur.jpg"],{fade:750,});
	$("#about-testimonials").backstretch(["images/demo/testimonial-bg.jpg"],{fade:750});	
	$(".home-background-widget").backstretch(["images/demo/bigstock-Portrait-of-smiling-women-doin-52836121.jpg"],{fade:750,});
	$("#page-title").backstretch([ "images/demo/bigstock-Portrait-of-smiling-women-doin-52836121-blur.jpg" ],{ fade: 750, });
	
		
		
/*
=============================================== 09. Isotope  ===============================================
*/

	var $isocontainer = $('.isotope');
	$('.isotope').imagesLoaded( function(){
		// init Isotope
		$('.isotope').isotope({ filter: '.init' });
		var $container = $('.isotope').isotope({
			itemSelector: '.isotope-item',
			layoutMode: 'masonry',
			transitionDuration: '0.8s'
		});
	  // filter functions
	  var filterFns = {
	  };
	  // bind filter button click
	  $('#filters').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$container.isotope({ filter: filterValue });
	  });
	  // change is-checked class on buttons
	  $('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.is-checked').removeClass('is-checked');
		  $( this ).addClass('is-checked');
		});
	  });

	//Timeout
	setTimeout(function() {
	$isocontainer.isotope('layout');
	}, 120); 
	  
	});	 

	
	//Isotope Reorder Layout on Window Resize
	var tilefix;
	$(window).on('resize', function() {
		tilefix = $('.isotope-item').width();
		$isocontainer.isotope('layout');
	});



	
	

/*
=============================================== 10. Counter  ===============================================
*/	
	

	var once = true;
	$('.counter-fiziko').waypoint(function() {
		if (once == true) {
			$('.counter').countTo({
				delay: 70,
				speed: 2500,
				refreshInterval: 30,
				time: 3000
			});
			once = false;
		}	
	}, { offset: '150%' });	

	
	
	
// END
});