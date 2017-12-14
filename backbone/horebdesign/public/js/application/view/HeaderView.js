require([
		'backbone'
	], function(Backbone) {

		var headerView = Backbone.View.extend({
			el: '#header-template',

			initialize: function() {

			},

			render: function() {
				return this;
			}
		});
		return headerView;
});