define([
	'backbone',
	'../models/MenuItem'
], function(Backbone, MenuItem){
	return Backbone.Collection.extend({
		model: MenuItem
	});
});