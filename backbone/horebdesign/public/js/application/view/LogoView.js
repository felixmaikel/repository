define([
	'backbone'
], function(Backbone){
	return Backbone.View.extend({
		tagName: 'label',

		render: function() {
			this.$el.text('Logo');
			return this;
		}
	});
});