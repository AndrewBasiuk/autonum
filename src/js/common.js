
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
