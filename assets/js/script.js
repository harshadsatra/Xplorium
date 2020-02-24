var vpw=$(window).width();
var vph=$(window).height();
var ss;

window.onbeforeunload = function () {
  window.scrollTo(0, 0); 
}

$('.accordian-btn').click(function() {
  ss.updateOffsets();
  $(this).prev().slideToggle();
  $(this).parent().addClass('active');
  if ($(this).text() == "- read less") {
    $(this).text("+ read more")
  } else {
    $(this).text("- read less")
  }
});

$(window).on('load', function(){
  console.log('loader');
  headerLoadAnim();
  
  
});

function scrollStoryActivator(){
  ss = $('#scrollActivator').scrollStory({
    debug: false,
    content: '.trigger',
    triggerOffset: '20%',
    autoUpdateOffsets: true,
    itemfocus: function(ev, item){
      console.log('item active', item.index, item.id, item.data, item.type, item.option,ev);
      var item = item.data;
      if(item.type == 'heading'){
        $('.bg-content').hide();
        console.log('heading');
        if(item.option == 'show1'){
          $(item.id).addClass('active');
        }
        if(item.option == 'show2'){
          $(item.id+' span').addClass('active');
        }
        if(item.option == 'hide2'){
          $(item.id).removeClass('active');
        }
        if(item.option == 'hide1'){
          $(item.id+' span').removeClass('active');
        }
      }

      if(item.type == 'content'){
        $('.bg-content').hide();
        $(item.id).fadeIn();
        if(item.option == 'video'){
          $(item.id+" video").get(0).play();
        }
        
      }
      
    }
  });
}

function headerLoadAnim(){
  // $('.hiddenBlock').addClass('active');
  var tl = new TimelineMax({
    onComplete: function(){
      scrollStoryActivator();
    }
  });
    tl.to($('#headerTitle'), 1.2, {opacity:1, ease:Power1.easeInOut})
    tl.to($('#headerTitle .part2'), 1.5, {opacity:1, ease:Power1.easeInOut})
    tl.to($('#headerTitle'), 2, {opacity:0, ease:Power1.easeInOut})
    tl.to($('#logo'), 2, {opacity:1, ease:Power1.easeInOut})
    tl.set($("#main-header"),{className:"-=main-header"})
    tl.set($("body"),{className:"-=loaded"});
    tl.staggerFrom($('.pointers li'), 0.5, {autoAlpha: 0}, 0.5);
    
    $(window).scrollTop(0);
};


$('#popup-btn').on('click',function(e){
  e.preventDefault();
  $('#popup').addClass('active');
});

$('#popup').click(function(e) {
  $(this).removeClass('active');
});

$('.cta-block').click(function(e) {
  e.stopPropagation();
});

  