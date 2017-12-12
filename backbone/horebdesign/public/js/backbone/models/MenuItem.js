define([
	'backbone'
],function(Backbone){
	return Backbone.Model.extend({
		defaults:{
			caption: 'Item menu',
			url: '#',
			image: '',
			style: '',
			type:'0',
			children: null
		}
	});
});