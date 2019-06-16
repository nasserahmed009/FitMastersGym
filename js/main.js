/* Hero Img Height */
var HeroImgHeight = $(window).height() - 80;

	$(".HeroImg").height(HeroImgHeight);
	$(".heroImgContainer").css("padding-top", (HeroImgHeight - $(".heroImgContainer").height() ) / 2);


	$(window).resize(function(){
		HeroImgHeight = $(window).height() - 80;
		$(".HeroImg").height(HeroImgHeight);
		$(".heroImgContainer").css("padding-top", (HeroImgHeight - $(".heroImgContainer").height() ) / 2);
	});
/* ----------------------------------------------------- */
/* Our Classes Section*/

$(".classImageContainer").mouseover(function(){
	$(this).find(".onHover").fadeIn(300);
});

$(".classImageContainer").mouseleave(function(){
	$(this).find(".onHover").fadeOut(300);
});

/* ----------------------------------------------------- */

 /* Navigation Toggle btn */

 var e = document.getElementById('btn');
e.addEventListener('click', function() {
  if (this.className == 'on') this.classList.remove('on');
  else this.classList.add('on');
});


var nav = $("nav")
$(".navToggleBtn").on("click",function(){
	if( nav.hasClass("opened") ){
		nav.slideUp(500);
		nav.removeClass("opened")

	} else {
		nav.slideDown(500);
		nav.addClass("opened")
	}
});


$(window).on("load", function(){
	$(".loading").delay(500).fadeOut(500);
});
