App.Views.SelectView = Backbone.View.extend({
	el: $("#selectList"),
	//events: {
	//	'click #selectList li': 'ticketDetail'
	//},
	initialize: function(){
		//console.log(App.tickets);
		if(App.tickets){
			this.render();
		}else{
			App.tickets = new App.Collections.TicketList;
			
			var n = parseInt(Math.random()*20,10)+1;
			for(var i=0;i<n;i++){
				App.tickets.add(new App.Models.TicketModel({
					startTime:'06:58',startStation:App.selectData.station[0].name,endTime:'16:33',endStation:App.selectData.station[1].name,price:8.88,count:(parseInt(Math.random()*100,10))
				}));
			}
			this.render();
		}
	},
	render: function() {
        //使用underscore这个库，来编译模板
        var template = _.template($("#selectResultTemplate").html());

        //加载模板到对应的el属性中
        //this.el.html(template);
        //界面
        $("#selectList").html(template({list:App.tickets.models})).height(document.documentElement.clientHeight - 45).find('li').one('click',this.ticketDetail);
		$('#selectResult').find('h1').html('查询' + App.selectData.date.date);
		new fz.Scroll('#selectList', {
			scrollY: true
		});	
        App.loading();
    },
	ticketDetail:function(){
		location.href='#book';
		App.ticket = App.tickets.models[parseInt($(event.target).closest('li').attr('data-index'))];
		console.log(App);
	}
});