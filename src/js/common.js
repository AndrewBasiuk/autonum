
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