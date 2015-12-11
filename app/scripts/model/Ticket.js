App.Models.TicketModel = Backbone.Model.extend({
    defaults: {
        startStation: '',
        startTime:'',
        endStation: '',
        endTime:'',
		price:0.00,
        count:0
    }
});
App.Collections.TicketList = Backbone.Collection.extend({
    initialize: function() {
		
    },
    model: App.Models.TicketModel,
    url: ''
});