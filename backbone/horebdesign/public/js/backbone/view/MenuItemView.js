require([
	'backbone',
	'_',
	'text!template/menubarcomponent.html'
], function(Backbone, _, template){
	return Backbone.View.extend({
	
	template:_.template(template),

	initialize: function(menuItem) {
		this.model = menuItem;
	},

	render: function() {
		this.$el.html(this.template);
		return this;
	}
});	
});
