define([
	'backbone',
	'application/view/HeaderView'
], function(Backbone, HeaderView){
	return Backbone.View.extend({
	el: '#container',

	initialize: function() {
		this.header = new HeaderView();
	},

	render: function() {
		this.$el.html(this.header.render().el);
		return this;
	}
});
});