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
    triggerOffset: '50%',
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
          var playPromise = $(item.id+" video").get(0).play();
          if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
              alert('Playing Video');
            });
          }
        }
      }

      if(item.type == 'none'){
        $('.bg-content').hide();
      }
      
    }
  });
}

function headerLoadAnim(){
  // $('.hiddenBlock').addClass('active');
  var tl = new TimelineMax({
    onStart: function(){
      scrollStoryActivator();
    }
  });
    tl.to($('#headerTitle'), 1.2, {opacity:1, ease:Power1.easeInOut})
    tl.to($('#headerTitle .part2'), 1.5, {opacity:1, ease:Power1.easeInOut})
    tl.to($('#headerTitle'), 2, {opacity:0, ease:Power1.easeInOut})
    tl.to($('#logo'), 2, {opacity:1, ease:Power1.easeInOut})
    tl.set($("#main-header"),{className:"-=main-header"})
    tl.set($("body"),{className:"-=loaded"})
    tl.to($('.pointers'), 2, {autoAlpha: 1,ease:Power1.easeInOut});
    tl.staggerFrom($('.pointers li'), 1, {autoAlpha: 0,ease:Power1.easeInOut}, 1);
    
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

  