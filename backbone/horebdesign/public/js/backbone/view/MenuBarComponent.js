require([
	'backbone',
	'underscore',
	'./MenuItemView',
	'../collections/MenuCollection'
], function(Backbone, _, MenuItemView, MenuCollection) {
	return Backbone.View.extend({

	el: '#nav-menu',

	initialize: function() {
		this.collection = new MenuCollection([{caption: 'Item 1',
												url: '#',
												image: '',
												style: '',
												type:'0',
												children: null},
												{caption: 'Item 2',
												url: '#',
												image: '',
												style: '',
												type:'0',
												children: null}]);
	},

	render: function() {
		_.each(this.collection.models, function(item, index){
			itemView = new MenuItemView(item);
			this.$el.find('#menu').append(itemView.render().el);
		} ,this);
		return this;
	}
});
});