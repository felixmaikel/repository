var MenuItem = Backbone.Model.extend({
	default:{
		caption: 'Item menu',
		url: '#',
		image: '',
		style: '',
		type:'0',
		children: null
	}
});

var menuItem = new MenuItem();