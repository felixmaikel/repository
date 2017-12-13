define([
	'backbone',
	'application/view/MenuBarComponent'
], function(Backbone, MenuBarComponent){
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