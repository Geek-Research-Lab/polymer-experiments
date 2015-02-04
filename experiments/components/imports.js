function imports() {

	// loading file
	var file = 'imports.js';

	// loading JS files/modules
	var modules = [
	'imports/preload.js',
	'imports/xhr.js',
	'imports/loader.js'
	];

	// source
	var src = document.querySelector('script[src*="' + file + '"]').getAttribute('src');

	//
	// Still more to code!
	//
}
