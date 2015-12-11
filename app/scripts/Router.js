App.Routers.AppRouter = Backbone.Router.extend({
	routes : {  
        '' : 'index', 
		'index' : 'index',
        'order':'order',
        'person':'person',
        'select':'select',
        'book':'book',
        'detail':'detail',
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
        if($('section.show').get(0) && $('section.show').get(0).id == 'detail'){
            App.zIndex -= 2;
            $('section.show').removeClass('fadeInRight').addClass('fadeOutRight');
        }
        else
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
        if(App.selectData)
            var selectView = new App.Views.SelectView();
        else
            location.href='#index';
    }, 
    book : function() { 
        App.loading(true); 
        if(App.zIndex == 2){
            $('section.show').removeClass('show');
        }else 
            $('section.show').removeClass('fadeInRight').addClass('fadeOutRight');
        App.zIndex = 3;
        
        $('#myMenu').removeClass('fadeIn').addClass('fadeOut');
        $('#book').removeClass('hide fadeOutRight').addClass('show fadeInRight').css('zIndex',App.zIndex);
        if(App.ticket)
            var bookView = new App.Views.BookView();
        else
            location.href='#select';
    }, 
    detail : function() { 
        App.loading(); 
        App.zIndex ++;
        if($('section.show').get(0) && $('section.show').get(0).id == 'book'){
            App.zIndex ++;
        }
        $('section.show').removeClass('show');
        $('#myMenu').removeClass('fadeIn').addClass('fadeOut');
        $('#detail').removeClass('hide fadeOutRight').addClass('show fadeInRight').css('zIndex',App.zIndex);
        if(App.order)
            var detailView = new App.Views.DetailView();
        else
            location.href='#index';
        
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
    location.href='#';
});