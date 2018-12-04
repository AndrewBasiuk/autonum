
function homeSlickInit() {
	var screenWidth = window.innerWidth;
  	if(screenWidth <= 768) {
		$('.article-slider').slick({
		    autoplay: false,
		    slidesToShow: 1,
		  	slidesToScroll: 1,
		  	speed: 1200,
		  	autoplaySpeed: 500,
		  	arrows: false,
		  	dots: true
		});
	}
}
homeSlickInit();

$( window ).resize(function() {
	homeSlickInit();
});

