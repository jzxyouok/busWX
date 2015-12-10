App.Routers.AppRouter = Backbone.Router.extend({
	routes : {  
        '' : 'index', 
		'index' : 'index',
        'order':'order',
        'person':'person',
        'select':'select',
        '*error' : 'index'  
    },  
    index : function() { 
        App.loading(true);
        App.zIndex = 1;
        $('#myMenu').removeClass('fadeIn').addClass('fadeOut');
		//$('#selecter').removeClass('hide').addClass('show');
        $('section.show').removeClass('show fadeInRight').addClass('fadeOutRight');
        var stationView = new App.Views.StationView();
    },  
    order : function() { 
        App.loading(true);
        App.zIndex ++;
        $('section.show').removeClass('show');
        $('#myMenu').removeClass('fadeIn').addClass('fadeOut');
        $('#order').removeClass('hide fadeOutRight').addClass('show fadeInRight').css('zIndex',App.zIndex);
        var orderView = new App.Views.OrderView();
    },  
    person : function() { 
        App.loading(true); 
        App.zIndex ++;
        $('section.show').removeClass('show');
        $('#myMenu').removeClass('fadeIn').addClass('fadeOut');
        $('#person').removeClass('hide fadeOutRight').addClass('show fadeInRight').css('zIndex',App.zIndex);
        var personView = new App.Views.PersonView();
    },  
    select : function() { 
        App.loading(true); 
        App.zIndex = 2;
        $('#myMenu').removeClass('fadeIn').addClass('fadeOut');
        $('section.show').removeClass('fadeInRight').addClass('fadeOutRight');
        $('#selectResult').removeClass('hide fadeOutRight').addClass('show fadeInRight').css('zIndex',App.zIndex);
        var selectView = new App.Views.SelectView();
    }, 
    renderError : function(error) {  
        console.log('URL错误, 错误信息: ' + error);  
    }  
}); 
$('section').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    if($(this).hasClass('fadeOutRight'))
        $(this).removeClass('show').addClass('hide').css('zIndex',App.zIndex);
});
$(function(){
    new App.Routers.AppRouter();  
    Backbone.history.start();  
});