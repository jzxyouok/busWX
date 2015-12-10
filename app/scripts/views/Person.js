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
			App.user = new App.Models.UserModel({name:'王同学',number:'12110013123'});
			that.render();
			/*App.user.fetch({url:'/getUser/',success:function(collection,response){  
				console.log(response);
				that.render();
			},error:function(){
				alert('error');
			}});*/
		}
	},
	render: function() {
        //使用underscore这个库，来编译模板
        var template = _.template($("#userTemplate").html());

        //加载模板到对应的el属性中
        //this.el.html(template);
        //界面
        $("#userInfo").html(template({name:App.user.get('name'),number:App.user.get('number')}));
        App.loading();
    },
	infoSave:function(){
		App.loading(true);
		setTimeout(function(){App.loading();},1000)
	}
});