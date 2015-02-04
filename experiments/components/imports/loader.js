function loaderMix(gems) {

	// importing
	var xhr = ['xhr.js'];
	xhr = xhr.gems;
	var flags = gems.flags;

	// main
	var loader = function(e) {
		'use strict';
		// u => url
		// e => element
		// nu => node url
		// dd => de-duplication
		// f => fetch
		var ig = this;
    	var u = e.src || e.href;
    	e.nu = u;
    	if (!ig.dd(u, e)) {
      		// fetching the resource
      		ig.f(u, e);
    	}

    //
  	// Still more to code!
  	//
  	};

	// exports
	gems.loader = loader;
}
