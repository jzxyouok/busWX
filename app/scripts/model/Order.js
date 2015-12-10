App.Models.OrderModel = Backbone.Model.extend({
    defaults: {
        start: '',
        end: '',
        date: '',
		price:'',
        status:0
    }
});
App.Collections.OrderList = Backbone.Collection.extend({
    initialize: function() {
		
    },
    model: App.Models.OrderModel,
    url: ''
});