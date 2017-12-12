require.config({
	paths:{
		jquery:'js/vendor/jquery-3.2.1.min',
		underscore: 'js/vendor/underscore-min'
		backbone:'js/vendor/backbone-min',
	}
});

require([
		'jquery',
		'js/backbone/view/ContainerView'
	],function($,ContainerView){
	$(document).ready(function() {
		var vs = new ContainerView();
		vs.setElement($('#container')).render();
	});	
});




