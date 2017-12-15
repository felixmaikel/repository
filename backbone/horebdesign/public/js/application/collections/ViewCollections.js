define([
	'backbone',
	'application/models/ViewModel'
], function(Backbone, ViewModel){
	return Backbone.Collection.extend({
		model: ViewModel,

		initlialize: function() {
			
		}
	});
});