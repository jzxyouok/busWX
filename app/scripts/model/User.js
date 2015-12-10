App.Models.UserModel = Backbone.Model.extend({
    defaults: {
        name: '',
		number:''
    }
});
App.Collections.UserList = Backbone.Collection.extend({
    initialize: function() {
		
    },
    model: App.Models.UserModel,
    url: ''
});