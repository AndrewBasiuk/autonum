
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
	$(".nav-mobile-list").slideToggle();
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

// select
$(".small-select select").on("click", function(e) {
	var select = $(this);
	var value = select.find("option:selected").text();
	
	if(value > 0) {
		select.addClass("selected");
	} else {
		select.removeClass("selected");
	}
});
// end__select

// files
var filesCount = 1;

function setFileName(){
	$(".files-browse__item input").on("change", function () {
		var text = $(this).siblings(".files-browse__text")[0];
		$(text).text(this.files[0].name);
	});
};
setFileName();

$(".files-browse__bottom").on("click", function () {
	filesCount++;

	$(".files-browse__top").append(
		'<div class="files-browse__item">' +
			'<label for="file_' + filesCount + '"> Обзор...</label>' +
			'<input id="file_' + filesCount + '" type="file">' +
			'<p class="files-browse__text">Файл не выбран</p>' +
        '</div>'
	);

	setFileName();
});
// end__files