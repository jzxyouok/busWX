App.Models.TicketModel = Backbone.Model.extend({
    defaults: {
        start: {name:'',date:''},
        end: {name:'',date:''},
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