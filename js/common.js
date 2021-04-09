$(function(){
	$(".btnMap").click(function(){
		$(this).toggleClass("active");
	});

	$(".btnSound").click(function(){
		$(this).toggleClass("on");
	});

	$("#btnLNB").click(function(e){
		e.preventDefault();
		$("#boxLNB").addClass("on");
	});

	$("#boxLNB > a.close").click(function(e){
		e.preventDefault();
		$("#boxLNB").removeClass("on");
	});

	var mainProduct = new Swiper('.boxProduct .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 5
	});

	var mainBrand = new Swiper('.boxMainBrand .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		centeredSlides: true,
		navigation: {
			nextEl: '.boxMainBrand .swiper-button-next',
			prevEl: '.boxMainBrand .swiper-button-prev',
		},
	});

	var listItem = new Swiper('.itemListTop .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 20,
		navigation: {
			nextEl: '.itemListTop .swiper-button-next',
			prevEl: '.itemListTop .swiper-button-prev',
		},
	});

	$(".open--popup").click(function(){
		var target = $(this).attr("data-pop");

		$("#"+target).addClass("active");
		$("#footer").addClass("is--fixed");
		$("#dim").fadeIn(300);
	});

	$(".popBasic .slideClose").click(function(e){
		e.preventDefault();

		$(this).parent().removeClass("active");
		$("#footer").removeClass("is--fixed");
		$("#dim").fadeOut(300);
	});

	$("#dim").click(function(){
		$(this).fadeOut(300);
		$(".popBasic").removeClass("active");
		$("#footer").removeClass("is--fixed");
	});
});