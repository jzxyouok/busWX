App.Views.PersonView = Backbone.View.extend({
	el: $("#userInfo"),
	events: {
		'click #userSave': 'infoSave',
	},
	initialize: function(){
		var that = this;
		if(App.user){
			this.render();
		}else{
			App.user = new App.Models.UserModel({pname:'王同学',psid:'12110013123',ptel:'15658717770'});
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
        var template = _.template($("#userTemplate").html());

        //加载模板到对应的el属性中
        //this.el.html(template);
        //界面
        $("#userInfo").html(template({name:App.user.get('pname'),number:App.user.get('psid'),phone:App.user.get('ptel')}));
        App.loading();
    },
	infoSave:function(){
		App.loading(true);
		setTimeout(function(){App.loading();},1000)
	}
});