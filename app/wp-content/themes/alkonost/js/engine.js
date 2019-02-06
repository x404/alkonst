jQuery(document).ready(function(jQuery){
	jQuery('#about-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow : '<button type="button" class="slick-prev" aria-label="Назад"><img src="/wp-content/themes/alkonost/images/about-arrow.svg" alt="" /></button>',
		nextArrow: '<button class="slick-next" aria-label="Вперед" type="button"><img src="/wp-content/themes/alkonost/images/about-arrow.svg" alt="" /></button>',
		// autoplay: true,
		// autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1199,
			  settings: {
			    slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
			    slidesToShow: 2
			  }
			},
			{
			  breakpoint: 550,
			  settings: {
			  	arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '110px'
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
			  	arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '110px'
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
			  	arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '50px'
			  }
			}
		]
	});	

	jQuery('#lastnews-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow : '<button type="button" class="slick-prev" aria-label="Назад"></button>',
		nextArrow: '<button class="slick-next" aria-label="Вперед" type="button"></button>',
		// autoplay: true,
		// autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1850,
			  settings: {
			    slidesToShow: 4
			  }
			},
			{
			  breakpoint: 1500,
			  settings: {
			    slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1100,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '250px'
			  }
			},
			{
			  breakpoint: 870,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '150px'
			  }
			},
			{
			  breakpoint: 680,
			  settings: {
			  	arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '110px'
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			  	arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '75px'
			  }
			},
			{
			  breakpoint: 501,
			  settings: {
		  		arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '80px'
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
		  		arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '50px'
			  }
			},
			{
			  breakpoint: 410,
			  settings: {
		  		arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '40px'
			  }
			},
			{
			  breakpoint: 350,
			  settings: {
		  		arrows: false,
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '25px'
			  }
			}
		]
	});
});


document.querySelector('.address').addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('o-map')
    return false;
})


document.querySelector('.close-map').addEventListener('click', function(e){
    document.querySelector('body').classList.remove('o-map');
    return false;
})


