$(".calc-input input")[0].oninput = function() {
	var val = $(".calc-input input")[0].value;

	$(".zakaz-imennie-car__number p").html(val);
};