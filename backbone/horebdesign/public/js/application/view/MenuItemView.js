require([
	'backbone',
	'underscore'
],function(Backbone, _){
	return Backbone.View.extend({
		el: 'li',
		
		initialize: function(menuItem) {
			this.model = menuItem
		},

		render: function(){
			return this;
		}
	});
});
