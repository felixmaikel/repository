define([
		'backbone',
		'underscore',
		'application/collections/ViewCollections',
		'application/view/LogoView'
	], function(Backbone, _, ViewCollections, LogoView) {
		return Backbone.View.extend({
			el: '#header-template',

			initialize: function() {
				this.viewCollection = new ViewCollections({view: LogoView});
			},

			render: function() {
				_.each(this.viewCollection.models, function(item, index){
					var View = item.get('view');
					var view = new View();
					this.$el.find('#logo').append(view.render().el);
				}, this);
				return this;
			}
		});
});