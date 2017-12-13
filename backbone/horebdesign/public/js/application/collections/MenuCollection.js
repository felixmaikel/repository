define([
	'backbone',
	'application/models/MenuItem'
], function(Backbone, MenuItem){
	return Backbone.Collection.extend({
		model: MenuItem
	});
});