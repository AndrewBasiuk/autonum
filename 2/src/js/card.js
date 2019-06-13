$('.card-slider').slick({
    autoplay: false,
    slidesToShow: 1,
  	slidesToScroll: 1,
  	speed: 500,
  	autoplaySpeed: 500,
  	arrows: false,
  	dots: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true
      }
    }],
  	asNavFor: '.card-slider-nav',
});

$('.card-slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.card-slider',
  dots: false,
  focusOnSelect: true,
  arrows: true,
  prevArrow: '.prev',
  nextArrow: '.next'
});