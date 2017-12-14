define([
	'backbone',
	'application/view/HeaderView'
], function(Backbone, HeaderView1){
	'use strict';
	return Backbone.View.extend({
	el: '#container',

	header: HeaderView1,

	initialize: function() {
			
	},

	render: function() {
		var a = this.header;
		return this;
	}
});
});