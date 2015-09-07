define([
	'backbone',
	'../models/home-model',
	'text!/../../js/app/templates/home-view-template.html',
	'../views/dashboard-view'
	], function(Backbone,HomeModel,HomeViewTemplate,DashboardView) {

	var HomeView = Backbone.View.extend({

	    model: HomeModel,
	    tagName: 'div',
	    el: $('#main'),
	    template: _.template(HomeViewTemplate),

		initialize: function() {
			// this.DashboardView.parent = this;
			this.router = require('router');

			this.render();

		},

		render: function() {
			console.log("HomeView - Render");

			// this.$el.append(view.render().$el.fadeIn(200).focus());

			this.$el.html(this.template(this.model.toJSON()));
			// this.$el.append("<div>Hello</div>")
			return this;
		},

		events: {
			'click #dashboard-button': 'changeview'
		},

		changeview: function() {
			
			// this.$el.hide();
			// this.$el.append(DashboardView.render());
			this.DashboardView.hide();

		}


	});

	return new HomeView();
});