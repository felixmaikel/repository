require([
		'jquery',
		'application/view/ContainerView'
	],function($,ContainerView){
	$(document).ready(function() {
		var vs = new ContainerView();
		vs.setElement($('#container')).render();
	});	
});




