$(".calc-input input")[0].oninput = function() {

	$(".zakaz-imennie-car__number").html($(".calc-input input")[0].value);

	console.log();
};