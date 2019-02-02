$(document).ready(function(){
	$('#about-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		// appendArrows: '.top-goods-nav',
		prevArrow : '<button type="button" class="slick-prev" aria-label="Назад"><img src="/wp-content/themes/alkonost/images/about-arrow.svg" /></button>',
		nextArrow: '<button class="slick-next" aria-label="Вперед" type="button"><img src="/wp-content/themes/alkonost/images/about-arrow.svg" /></button>',
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
			  breakpoint: 501,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '110px'
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '110px'
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '50px'
			  }
			}
		]
	});	
});
