App.Views.DetailView = Backbone.View.extend({
	el: $("#orderInfo"),
	events: {
		'click #orderDelete': 'orderDelete',
	},
	initialize: function(){
		this.render();
	},
	render: function() {
        //使用underscore这个库，来编译模板
        var template = _.template($("#detailTemplate").html());

        //加载模板到对应的el属性中
        //this.el.html(template);
        //界面
		//console.log(App.order);
		var time = new Date(App.order.get('date').replace(/-/g,"/")),now = new Date(new Date().Format('yyyy/MM/dd'));
		var date = time.Format("MM月d日 "),x = time - now;
		//console.log(x);
		//console.log(now);
		if(x>0){
			if(x<=86400000)
				date +='今天 ';
			else if(x<86400000*2)
				date +='明天 ';
			else if(x<86400000*3)
				date +='后天 ';
		}else{
			x = now - time;
			if(x<=86400000)
				date +='昨天 ';
			else if(x<86400000*2)
				date +='前天 ';
		}
        $("#orderInfo").html(template({
			order:App.order,
			startTime:time.Format('hh:mm'),
			date:date + time.CHWeek()
			
		}));
        App.loading();
    },
	orderDelete:function(){
		App.loading(true);
		setTimeout(function(){App.loading();},1000)
	}
});