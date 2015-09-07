define([
	'backbone'
], function(Backbone) {
	var HomeModel = Backbone.Model.extend({

		initialize: function() {
		},
	    
		defaults: {
			firstname: "Jeffrey",
			lastname: "Takaki"	

		}

	});

	return new HomeModel();
});