
function mobileSlickInit() {
	var screenWidth = window.innerWidth;
  	if(screenWidth <= 767) {
		$('.mobile-slider').slick({
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

// menu
$(".hamburger").on("click", function() {
	$(".nav-wrap").css("left", "0");
	// $("body").css("overflow", "hidden")
});

$(".hamburger-close").on("click", function() {
	$(".nav-wrap").css("left", "-100%");
});
// end__menu

//lang open
$(".lang").on("click", function() {
	$(this).find("ul").toggle();
});
//end__lang open


//change table row background
$(".table-row").hover(
	function() {
		if(!$(this).hasClass("table-head")) {
			$(this).addClass("table-row_active");
		}
	},
	function() {
		if(!$(this).hasClass("table-head")) {
			$(this).removeClass("table-row_active");
		}
	}
);
var screenWidth = window.innerWidth;
$(".table-row").on("click",function() {
	$(this).find(".radio").prop("checked", true);

	if($(this).find(".checkbox").prop("checked") == false) {
		$(this).find(".checkbox").prop("checked", true);
	} else if($(this).find(".checkbox").prop("checked") == true) {
		$(this).find(".checkbox").prop("checked", false);
	}
});
//end__change table row background