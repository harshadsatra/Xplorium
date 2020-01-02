var vpw=$(window).width();
var vph=$(window).height();

/* Client Slider */
$('.lri-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
  autoplaySpeed: 2000,
  dots:false,
  infinite:false,
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: '10px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
/* Strength Slider */
$('.strength-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: false,
  autoplaySpeed: 2000,
  dots:false,
  infinite:false,
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
/* Improve Slider */
$('.improve-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: false,
  autoplaySpeed: 2000,
  dots:false,
  infinite:false,
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
/* Co-Founder Slider */
$('.founder-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: false,
  autoplaySpeed: 2000,
  dots:false,
  infinite:false,
  arrows:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$(function(){
  $('.detailed-wrap h3').on('click', function() {
    var data = $(this).data('detail');
    $(data).slideToggle();
    $(this).toggleClass('active');
  });

  $('.form_field input').click(function(){
		$(this).parent().addClass('active_field')	
	});
	$('.form_field input').blur(function(){
		var input_value = $(this).val();
		if(input_value==""){
			$(this).parent().removeClass('active_field')	
		}
		else if(input_value!=""){
			$(this).parent().addClass('active_field')	
		}
  });
});

$(document).ready(function(){
  var time = 5;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.slider');
  $slick.slick({
    draggable: true,
    adaptiveHeight: false,
    dots: false,
    mobileFirst: true,
    pauseOnDotsHover: true,
  });
  
  $bar = $('.slider-progress .progress');
  
  $('.slider-wrapper').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }
  
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }
  
  startProgressbar();
  
});