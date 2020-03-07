window.onbeforeunload = function () {
  window.scrollTo(0, 0); 
}

$(window).on('load', function(){
  setTimeout(function(){
    // headerLoadAnim();
  },2000);
});

function scrollStoryActivator(){
  ss = $('#scrollActivator').scrollStory({
    debug: false,
    content: '.trigger',
    triggerOffset: '50%',
    autoUpdateOffsets: true,
    itemfocus: function(ev, item){
      var item = item.data;
      $("video").each(function () { this.pause() });
      if(item.type == 'heading'){
        $('.bg-content').hide();
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
          var playPromise = $(item.id+" video");
          console.log(playPromise);
          var ua = navigator.userAgent.toLowerCase(); 
          if (ua.indexOf('safari') != -1) { 
            if (ua.indexOf('chrome') > -1) {
              // alert("1") // Chrome
              playPromise.prop('muted', false);
            } else {
              // alert("2") // Safari
            }
          }
          playPromise.get(0).play();
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
    tl.to($('.pointers'), 3, {autoAlpha: 1,ease:Power1.easeInOut});
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

$('#play-video').on('click',function(e){
  e.preventDefault();
  $('.loader').fadeOut();
  headerLoadAnim();
});

  