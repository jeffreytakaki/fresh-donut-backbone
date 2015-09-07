define([
	'backbone',
	'text!/../../js/app/templates/dashboard-view-template.html',
	], function(Backbone,DashboardViewTemplate) {

	var DashboardView = Backbone.View.extend({

	    tagName: 'div',
	    el: $('#main2'),
	    template: _.template(DashboardViewTemplate),

		initialize: function() {
			this.setElement( this.el );
			this.render();
		},

		render: function() {


			console.log("DashboardView - Render");
			this.$el.html(this.template);
			// this.$el.append("<div>Hello</div>")
			// return this;
		},

		events: {
			'click #dashboard-button': 'changeview'
		},

		changeview: function() {
			this.$el.empty;
			this.DashboardView.render();

		}

	});

	return new DashboardView();
});