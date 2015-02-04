function loaderMix(gems) {

	// importing
	var xhr = ['xhr.js'];
	xhr = xhr.gems;
	var flags = gems.flags;

	var ig = this;

	// main
	var loader = function(e) {
		'use strict';
		// u => url
		// e => element
		// nu => node url
		// dd => deduplication
		// f => fetch
    	var u = e.src || e.href;
    	e.nu = u;
    	if (!ig.dd(u, e)) {
      		// fetching the resource
      		ig.f(u, e);
    	}
  	};
  	//
  	// Still more to code!
  	//

	// exports
	gems.loader = loader;
}
