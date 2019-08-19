
function mobileSlickInit() {
	if ($('.mobile-slider')) {
		var screenWidth = window.innerWidth;
		if (screenWidth <= 767) {
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
}

mobileSlickInit();
$(window).resize(function () {
	mobileSlickInit();
});

// menu
$(".hamburger").on("click", function() {
	console.log("dsv");
	$(".nav-mobile-list").slideToggle();
});
// end__menu

console.log("dsv");


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
$(".order-type li").on("click",function() {
	$(".order-type li").removeClass("numbers-list__item_active");
	$(this).addClass("numbers-list__item_active");
	$(this).find(".radio").prop("checked", true);

	// if($(this).find(".checkbox").prop("checked") == false) {
	// 	$(this).find(".checkbox").prop("checked", true);
	// } else if($(this).find(".checkbox").prop("checked") == true) {
	// 	$(this).find(".checkbox").prop("checked", false);
	// }
});
//end__change table row background