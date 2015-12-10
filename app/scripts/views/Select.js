App.Views.SelectView = Backbone.View.extend({
	el: $("#selectList"),
	events: {
		'click #selectList li': 'ticketDetail'
	},
	initialize: function(){
		this.render();
	},
	render: function() {
		var tickets = new App.Collections.TicketList;
		
		var n = parseInt(Math.random()*20,10)+1;
		for(var i=0;i<n;i++){
			tickets.add(new App.Models.TicketModel({
				startTime:'06:58',startStation:App.seleteData.station[0].name,endTime:'16:33',endStation:App.seleteData.station[1].name,price:8.88,count:(parseInt(Math.random()*100,10))
			}));
		}
		/*tickets.fetch({url:'/getTickets/',success:function(collection,response){  
            collection.each(function(station){
                alert(station.get('start'));  
            });
        },error:function(){
            alert('error');
        }});*/
		console.log(tickets);
        //使用underscore这个库，来编译模板
        var template = _.template($("#selectResultTemplate").html());

        //加载模板到对应的el属性中
        //this.el.html(template);
        //界面
        $("#selectList").html(template({list:tickets.models})).height(document.documentElement.clientHeight - 45);
		$('#selectResult').find('h1').html('查询' + App.seleteData.date.date);
		new fz.Scroll('#selectList', {
			scrollY: true
		});	
        App.loading();
    },
	ticketDetail:function(){
		alert(1111);
		
	}
});