require([
	'backbone',
	'underscore'
],function(Backbone, _){
	return Backbone.View.extend({
		el: 'li',

		render: function(){
			return this;
		}
	});
});
