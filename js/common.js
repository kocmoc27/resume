$(document).ready(function() {

	a = function heightDetect() {
		$(".main_head").css("height",$(window).height());
	}
	a();
	$(window).resize(function(){
		a();
	});

	$('#portfolio_grid').mixItUp();

	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass('active');
		$(this).addClass('active');
	});
	//$('.portfolio_table').mixItUp();

	$(".top_text").animated('fadeInDown','fadeOutUp');

	$(".animation_1").animated('fadeInDown','fadeOutUp');
	//$(".animation_1").animated('flipInY','flipOutY');
	$(".animation_2").animated('fadeInLeft','fadeOutLeft');
	$(".animation_3").animated('fadeInRight','fadeOutRight');

	$(".right .resume_item").animated('fadeInLeft','fadeOutDown');
	$(".left .resume_item").animated('fadeInRight','fadeOutDown');

	$('.popup').magnificPopup({type:'image'});
	$('.popup_content').magnificPopup({type:'inline',});

	$(".toggle_mnu").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function(){
			if($(".top_mnu").is(":visible")){
				$(".top_mnu").fadeOut(600);
				$(".top_mnu li a").removeClass("fadeInUp animated");
			}
			else{
				$(".top_mnu").fadeIn(600);
				$(".top_mnu li a").addClass("fadeInUp animated");
			}
	});

	$(".top_mnu li a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".portfolio_item").each(function(){
		$(this).find(".popup_content").attr("href","#work_"+i);
		$(this).find(".port_descr").attr("id", "work_" + i);
		i++;
	});

	$(".top_mnu ul a").mPageScroll2id();
	$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
	// $(".top_mnu li").sliphover({
	// 	target: 'a',
	// 	backgroundColor: 'rgba(255,255,255,.1)'
	// });

}); 

// $(window).load(function() {

// 	// $(".loader_inner").fadeOut();
// 	// $(".loader").delay(400).fadeOut("slow");

// 	// $(".top_text h1").animated("fadeInDown", "fadeOutUp");
// 	// $(".top_text p").animated("fadeInUp", "fadeOutDown");

// }); 
window.onload = function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(1000).fadeOut("slow"); 
};



