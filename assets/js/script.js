var vpw=$(window).width();
var vph=$(window).height();

$('.accordian-btn').click(function() {
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


function headerLoadAnim(){
  // $('.hiddenBlock').addClass('active');
  var tl = new TimelineMax();
    tl.to($('#headerTitle'), 0.4, {opacity:1, ease:Power1.easeInOut})
    tl.to($('#headerTitle .part2'), 0.4, {opacity:1, ease:Power1.easeInOut})
    tl.to($('#headerTitle'), 2, {opacity:0, ease:Power1.easeInOut})
    tl.to($('#logo'), 2, {opacity:1, ease:Power1.easeInOut})
    tl.set($("#main-header"),{className:"-=main-header"})
    tl.set($("body"),{className:"-=loaded"});
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

$(function(){
  $('#scrollActivator').scrollStory({
    debug: false,
    content: '.trigger',
    triggerOffset: '45%',
    itemfocus: function(ev, item){
      console.log('item active', item.index, item.id, item.data, item.type, item.option);
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
      }
      /*

      if(item.id === 't1'){
        console.log('Activating trigger 1');
      } else {
        console.log('Deactivating trigger 1');
      }

      if(item.id === 't2'){
        console.log('Activating trigger 2');
      } else {
        console.log('Deactivating trigger 2');
      }

      if(item.id === 't3'){
        console.log('Activating trigger 3');
      } else {
        console.log('Deactivating trigger 3');
      }
      */
      
    }
  });
});