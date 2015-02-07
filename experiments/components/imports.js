function imports() {

	// loading file
	var file = 'imports.js';

	// loading JS files/modules
	var modules = [
	'preload.js',
	'xhr.js',
	'loader.js',
	'path.js',
	// 'module.js',
	/*
	In module.js, it has addModule and InitModule...
	it is a lot similar to booting a system..
	I always had an intention to turn OS into Web
	And Kernel is the core of OS
	Always dreamed of building a web kernel for a long time
	We can build anything with a kernel =P
	Wish i had a genius brain! =D =D
	Every web browser has an interface with OS
	In between the interface is the loophole =D
	*/
	];

	// source
	var src = document.querySelector('script[src*="' + file + '"]').getAttribute('src');

	//
	// Still more to code!
	//
}
