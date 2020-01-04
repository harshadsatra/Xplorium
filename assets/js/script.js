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
    triggerOffset: '35%',
    itemfocus: function(ev, item){
      console.log('item active', item.index, item.id, item.data, item);
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
      
    }
  });
});