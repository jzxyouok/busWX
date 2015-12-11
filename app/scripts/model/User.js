App.Models.UserModel = Backbone.Model.extend({
    defaults: {
        p1:'',
        p2:'',
        p3:'',
        pname: '',
		psid:'',
        ptel:'',
        openid:'aaa'
    }
});
App.Collections.UserList = Backbone.Collection.extend({
    initialize: function() {
		
    },
    model: App.Models.UserModel,
    url: ''
});