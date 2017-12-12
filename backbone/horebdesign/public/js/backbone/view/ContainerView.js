/*var ContainerView = Backbone.View.extend({
	el: '#container',

	initialize: function() {
		this.menuBarComponent = new MenuBarComponent();
	},

	render: function() {
		this.$el.find('#main-menu').append(this.menuBarComponent.render().el);
		return this;
	}
});
var containerView = new ContainerView();*/
define([
	'backbone',
	'_',
	'MenuBarComponent'
], function(Backbone, _, MenuBarComponent){
	return Backbone.View.extend({
	el: '#container',

	initialize: function() {
		this.menuBarComponent = new MenuBarComponent();
	},

	render: function() {
		this.$el.find('#main-menu').append(this.menuBarComponent.render().el);
		return this;
	}
});
});