define([
		'backbone'
	], function(Backbone) {
		return Backbone.View.extend({
			el: '#header-template',

			initialize: function() {

			},

			render: function() {
				this.$el.text("Prueba");
				return this;
			}
		});
});