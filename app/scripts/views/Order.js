App.Views.OrderView = Backbone.View.extend({
	el: $("#orderList"),
	events: {
		'click #orderList li': 'orderDetail'
	},
	initialize: function(){
		this.render();
	},
	render: function() {
		var orders = new App.Collections.OrderList;
		orders.add(new App.Models.OrderModel({
			start: '成都校区',end: '峨眉校区',date: '2015-12-12 06:12',price:8.88,status:0
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-11 18:12',price:18.88,status:1
		}));
		orders.add(new App.Models.OrderModel({
			start: '成都校区',end: '峨眉校区',date: '2015-12-10 06:12',price:8.88,status:2
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-09 18:12',price:2.88,status:0
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-08 18:12',price:2.88,status:0
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-07 18:12',price:2.88,status:0
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-06 18:12',price:2.88,status:0
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-05 18:12',price:2.88,status:0
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-04 18:12',price:2.88,status:0
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-03 18:12',price:2.88,status:0
		}));
		orders.add(new App.Models.OrderModel({
			start: '峨眉校区',end: '成都校区',date: '2015-12-02 18:12',price:2.88,status:0
		}));
		/*orders.fetch({url:'/getTickets/',success:function(collection,response){  
            collection.each(function(station){
                alert(station.get('start'));  
            });
        },error:function(){
            alert('error');
        }});*/
		
        //使用underscore这个库，来编译模板
        var template = _.template($("#orderListTemplate").html());

        //加载模板到对应的el属性中
        //this.el.html(template);
        //界面
        $("#orderList").html(template({list:orders.models})).height(document.documentElement.clientHeight - 45);
		new fz.Scroll('#orderList', {
			scrollY: true
		});	
        App.loading();
    },
	orderDetail:function(){
		alert(1111);
		
	}
});