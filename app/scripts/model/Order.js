App.Models.OrderModel = Backbone.Model.extend({
    defaults: {
        startStation: '',
        startTime:'',
        endStation: '',
        date: '',
		price:'',
        status:0,
        number:'',
        company:'',
        code:'',
        phone:'',
        pname:'',
        psid:'',
        ptel:''
    }
});
App.Collections.OrderList = Backbone.Collection.extend({
    initialize: function() {
		
    },
    model: App.Models.OrderModel,
    url: ''
});