App.Models.StationModel = Backbone.Model.extend({
    defaults: {
        name: ''
    }
});
App.Collections.StationList = Backbone.Collection.extend({
    initialize: function() {
		
    },
    model: App.Models.StationModel,
    url: '',
    parse:function(data)
    {
    	return data.Areas;
    }
});