App.Views.BookView = Backbone.View.extend({
	el: $("#bookInfo"),
	events: {
		'click #ticketSave': 'ticketSave',
		'click #bookCancel': 'bookCancel',
		'click #bookSave': 'bookSave',
		'click #orderOpen': 'orderOpen'
	},
	initialize: function(){
		var that = this;
		if(App.user){
			this.render();
		}else{
			App.user = new App.Models.UserModel({pname:'王同学',psid:'12110013123',ptel:'15658717720'});
			that.render();
			/*App.user = new App.Models.UserModel;
			App.user.fetch({
				url:App.URL.getUser,
				success:function(collection,response){  
					console.log(response);
					console.log(App.user);
					that.render();
				},
				error:function(){
					$.tips({
						content:'获取个人信息失败，请重试！',
						stayTime:2000,
						type:"warn"
					})
					location.href="#index";
					
				}
			});*/
		}
	},
	render: function() {
        //使用underscore这个库，来编译模板
        var template = _.template($("#bookTemplate").html());

        //加载模板到对应的el属性中
        //this.el.html(template);
        //界面
        $("#bookInfo").html(template({ticket:App.ticket,user:{name:App.user.get('pname'),number:App.user.get('psid'),phone:App.user.get('ptel')},date:App.selectData.date.show}));
        App.loading();
    },
	ticketSave:function(){
		$('#bookDialog').dialog("show")
		.find('.ui-dialog-bd').html('<div>确认要预定 '+App.selectData.date.show+'，'+App.ticket.get('startTime')+' 由 '+App.ticket.get('startStation')+' 出发的车票吗</div>');
	},
	bookCancel:function(){
		$('#bookDialog').dialog("hide");
	},
	bookSave:function(){
		$('#bookDialog').dialog("hide");
		App.loading(true);
		App.order = new App.Models.OrderModel({
			pname:App.user.get('pname'),psid:App.user.get('psid'),ptel:App.user.get('ptel'),code:'123123123123',number:'E123123213',phone:'123123123',status:0,
			price:App.ticket.get('price'),date:App.selectData.date.date + ' ' +App.ticket.get('startTime'),startStation:App.ticket.get('startStation'),
			endStation:App.ticket.get('endStation')
		});
		//$.ajax();
		setTimeout(function(){
			App.loading();
			console.log(App.ticket);
			
			App.ticket = null;App.tickets = null;App.selectData = null;
			$('#orderDialog').dialog("show")
			.find('.ui-dialog-bd').html('你已经预定成功，请尽快到售票处付款领票');
			
			
		},1000)
	},
	orderOpen:function(){
		
		location.href="#detail";
	}
});