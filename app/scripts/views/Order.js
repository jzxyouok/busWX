App.Views.OrderView = Backbone.View.extend({
	el: $("#orderList"),
	events: {
		'click #orderList li': 'orderDetail'
	},
	initialize: function(){
		this.render();
	},
	render: function() {
		App.orders = new App.Collections.OrderList;
		App.orders.add(new App.Models.OrderModel({
			startStation: '成都校区',endStation: '峨眉校区',date: '2015-12-15 06:12',price:8.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-14 18:12',price:18.88,status:1,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '成都校区',endStation: '峨眉校区',date: '2015-12-13 06:12',price:8.88,status:2,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-12 18:12',price:2.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-11 18:12',price:2.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-10 18:12',price:2.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-09 18:12',price:2.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-08 18:12',price:2.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-07 18:12',price:2.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-06 18:12',price:2.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
		}));
		App.orders.add(new App.Models.OrderModel({
			startStation: '峨眉校区',endStation: '成都校区',date: '2015-12-05 18:12',price:2.88,status:0,company:'123后勤宝',code:'E83838213',number:'123215123213',pname:'王同学',psid:'12110013222',ptel:'156587215464'
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
        $("#orderList").html(template({list:App.orders.models})).height(document.documentElement.clientHeight - 45);
		new fz.Scroll('#orderList', {
			scrollY: true
		});	
        App.loading();
    },
	orderDetail:function(){
		App.order = App.orders.models[parseInt($(event.target).closest('li').attr('data-index'))];
		location.href="#detail";
		
	}
});