//header个人中心菜单开关控制
$('.menu-switch').click(function(){
	var menu = $('#myMenu');
	menu.removeClass('hide fadeOut').addClass('fadeIn');
});
$('#myMenu').click(function(){
	//if(event.target.id == 'myMenu')
		$('#myMenu').removeClass('fadeIn').addClass('fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
		if($(this).hasClass('fadeOut')){
			$(this).addClass('hide').removeClass('fadeOut');
		}
	});
});

//出发日期 控制
var selectScroller = null;
$('#selectBox').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
	if($(this).hasClass('fadeIn')){
		var scroller = $('#selectScroller');
		if(scroller.find('.select-list').get(0).clientHeight>=250) {
			scroller.height(250);
			if(selectScroller)
				selectScroller.refresh();
			else 
				selectScroller = new fz.Scroll('#selectScroller', {
					scrollY: true
				});	
		}
		else{
			scroller.height(scroller.find('.select-list').get(0).clientHeight);
			selectScroller = new fz.Scroll('#selectScroller', {
				scrollY: true
			});	
		}
	}
})
$('#selectBoxClose').click(function(){
	$('#selectBox').removeClass('show fadeIn').addClass('fadeOut');
})