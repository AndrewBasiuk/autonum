
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

//change table row background
$(".table-row").hover(
	function() {
		if(!$(this).hasClass("table-head")) {
			$(this).find(".table-type").css("background-color", "#AEBAD2");
			$(this).find(".table-price").css("background-color", "#AEBAD2");
			$(this).find(".table-button").css("background-color", "#AEBAD2");
		}
	},
	function() {
		var screenWidth = window.innerWidth;
		if(screenWidth >= 769) {
			if(!$(this).hasClass("table-head")) {
				$(this).find(".table-type").css("background-color", "#D6D5D1");
				$(this).find(".table-price").css("background-color", "#DFDEDB");
				$(this).find(".table-button").css("background-color", "#DFDEDB");
			}
		} else {
			if(!$(this).hasClass("table-head")) {
				$(this).find(".table-type").css("background-color", "#D6D5D1");
				$(this).find(".table-price").css("background-color", "#D6D5D1");
				$(this).find(".table-button").css("background-color", "#D6D5D1");
			}
		}
	}
);
//end__change table row background
