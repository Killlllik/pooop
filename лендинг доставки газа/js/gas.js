$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
    });
    
});

$(function(){
    $.fn.scrollToTop=function(){
      $(this).hide().removeAttr("href");
      if($(window).scrollTop()!="0"){
          $(this).fadeIn("slow")
    }
    var scrollDiv=$(this);
    $(window).scroll(function(){
      if($(window).scrollTop()=="0"){
      $(scrollDiv).fadeOut("slow")
      }else{
      $(scrollDiv).fadeIn("slow")
    }
    });
      $(this).click(function(){
        $("html, body").animate({scrollTop:0},"slow")
      })
    }
  });
  $(function() {$("#toTop").scrollToTop();});

  $(function(){
	$('#scroll_bottom').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 1200);
		return false;
	});
});


$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
