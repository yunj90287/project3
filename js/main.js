$(function(){
	/* main slider */
	let mainCurrent, mainTotal;
	const mainSwiper=new Swiper(".mainSwiper",{
		loop: true,
		autoplay: { 
			delay: 3000
		},
		pagination: { 
		el: ".mainSwiper .swiper-pagination"
		},
		on: {
			init: function() {
				mainCurrent=this.realIndex+1;
				mainTotal=this.slides.length;
				$("#main_slider .account .current").text(mainCurrent);
				$("#main_slider .account .total").text(mainTotal);
			},

			slideChangeTransitionEnd: function(){
				mainCurrent=this.realIndex+1;
				$("#main_slider .account .current").text(mainCurrent);
			}
		},

	});
	$("#main_slider .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$("#main_slider .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});

	$("#pause_play").click(function(e){
		e.preventDefault();

		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});

	
	/* gnb */
	$("#gnb > ul > li").hover(
		function(){
			$(".header_bottom").addClass("active");
		},
		function(){
			$(".header_bottom").removeClass("active");
		}
	);

	let totalLi=$("#gnb > ul > li").length;

	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");

		if($(this).parent().index() === 0){
			$(".header_bottom").addClass("active");
		}
	});

	$("#gnb li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");

		if($(this).parent().parent().index() === (totalLi-1)){
			$(".header_bottom").removeClass("active");
		}
	});

	let wint;

	$(window).scroll(function(){
	wint=$(window).scrollTop();

		if(wint > 75){
			$(".header_bottom").addClass("fixed");
		}
		else{
		$(".header_bottom").removeClass("fixed");
		}
	});

	/* magazine */

	const subSwiper=new Swiper(".subSwiper",{
		loop: true,
		autoplay: { 
			delay: 3000
		},
		pagination: { 
		el: ".subSwiper .swiper-pagination",
		clickable: true
		
		},
	});

	/* rank */
	
	$("#season > a").click(function(e){
		e.preventDefault();

		if($("#season").hasClass("active") === false) {
			$("#season").addClass("active");

			if($("#char").hasClass("active") == true){
			$("#char").removeClass("active");
		}
		}
		else {
			$("#season").removeClass("active");
		}
	});

	$("#season ul li a").click(function(e){
		e.preventDefault();
		if($("#season").hasClass("active") == true){
			$("#season").removeClass("active");
		}

		let string=$(this).text();

		$("#season > a").text(string);
	});

	$("#char > a").click(function(e){
		e.preventDefault();

		if($("#char").hasClass("active") === false) {
			$("#char").addClass("active");

			if($("#season").hasClass("active") == true){
			$("#season").removeClass("active");
		}
		}
		else {
			$("#char").removeClass("active");
		}
	});

	$("#char ul li a").click(function(e){
		e.preventDefault();
		if($("#char").hasClass("active") == true){
			$("#char").removeClass("active");
		}

		let string=$(this).html();

		$("#char > a").html(string);
	});


	$("#season ul li a").focusin(function(){
		$(this).find("#season").addClass("active");

		if($(this).parent().index() === 0){
			$("#season").addClass("active");
		}
	});

	$("#season ul li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});

	$("#char ul li a").focusin(function(){
		$(this).find("#char").addClass("active");

		if($(this).parent().index() === 0){
			$("#char").addClass("active");
		}
	});

	$("#char ul li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});

	/* event */

	let xoffset=0;

	function galleryMoving(){
		$(".event .controller li").removeClass("active");
		$(".event .controller li").eq(xoffset).addClass("active");
		$(".event_bnr ul li").removeClass("active");
		$(".event_bnr ul li").eq(xoffset).addClass("active")
	}

	galleryMoving();

	$(".event .controller li").click(function(e){
		e.preventDefault();

		$(".event .controller li").removeClass("active");
		$(this).addClass("active");

		xoffset=$(this).index();
		$(".event_bnr ul li").removeClass("active");
		$(".event_bnr ul li").eq(xoffset).addClass("active");
	});

	setInterval(function(){
		if(xoffset < 2){
			galleryMoving();
			xoffset++;
		}
		else {
			galleryMoving();
			xoffset=0;
		}
	}, 2000);

	/* menu */

	$("#menu").click(function(e){
		e.preventDefault();
		if($("#menu").hasClass("open")){
			$(this).removeAttr("class");
			$("#menu").addClass("close");
			$("#mobile").addClass("active");
			$(".dim").addClass("active");
		}
		else {
			$(this).removeAttr("class");
			$("#mobile").removeClass("active");
			$("#menu").addClass("open");
			$(".dim").removeClass("active");
		}
	});

	/* mobile */


	$("#mobile > ul > li").click(function(e){
	e.preventDefault();

	if($(this).hasClass("on") === true){ // 열린 경우
		$(this).removeClass("on");
		$(this).find("ul").slideUp(300);
	}
	else{ // 닫힌 경우
		$("#mobile > ul > li").removeClass("on");
		$(this).addClass("on");
		$("#mobile ul ul").slideUp(300);
		$(this).find("ul").slideDown(300);
	}

	});

	let winw; 
	$(window).resize(function(){
	winw=$(window).width();
	if(winw > 1020){ 
		if($("#menu").hasClass("close") === true) { 
			$("body").removeClass("fixed"); 
			$("#mobile").hide();
			$("#menu").addClass("open");
		}

	}
});

});