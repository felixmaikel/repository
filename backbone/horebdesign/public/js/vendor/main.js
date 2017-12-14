require.config({
	baseUrl: 'public/js',
	paths:{
		jquery: 'vendor/jquery-3.2.1.min',
		underscore: 'vendor/underscore-min',
		backbone:'vendor/backbone-min'
	},
	shim:{
		'jquery':{
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps:['underscore','jquery'],
			exports: 'backbone'
		}
	}
});