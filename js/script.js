$(window).scroll(function () {
	$('nav, a, span').toggleClass('scrolled', $(this).scrollTop() > 450);
});

$(window).scroll(function () {
	$('nav, a, span').toggleClass('scrolled1', $(this).scrollTop() > 1250);
});

$(window).scroll(function () {
	$('nav, a, span').toggleClass('scrolled2', $(this).scrollTop() > 2450);
});

$('.nav-link, .navbar-brand').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
		scrollTop: $(sectionTo).offset().top - 0
    }, 1250, 'easeInOutExpo');
});

// window.addEventListener('scroll',()=>{
// 	let content = document.querySelector('.pembungkus');
// 	let contentPosition = content.getBoundingClientRect().top;
// 	let screenPosition = window.innerHeight /0.9;
// 	if(contentPosition < screenPosition){
// 		content.classList.add('active');
// 	}else{
// 		content.classList.remove('active');
// 	}
// });
// $(window).scroll(function () {
// 	$('a').toggleClass('scrolled', $(this).scrollTop() > 20);
// });

// $(window).scroll(function () {
// 	$('span').toggleClass('scrolled', $(this).scrollTop() > 250);
// });

// $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 		var target = $(this.hash);
// 		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 		if (target.length) {
// 			$('html, body').animate({
// 				scrollTop: (target.offset().top - 71)
// 			}, 1000, "easeInOutExpo");
// 			return false;
// 		}
// 	}

// $(document).ready(function (){
// 	$(window).on("scroll", function (){
// 		$(".progress").each(function (index, progress){
// 			var progressBar = $(progress).find(".progress-bar");
// 			var progressPercent = perseInt($(progressBar).attr("data-progress"));
// 			if ($(window).scrollTop() > $(progress).offset().top - 400) {
// 				$(progressBar)
// 				.css("width", progressPercent + "%")
// 				.text(progressPercent + "%");
// 			}
// 		});
// 	});
// });