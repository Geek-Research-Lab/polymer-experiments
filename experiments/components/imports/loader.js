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

    	function f(u, e) {
    		// ff => flags
    		ff.load();
    		console.log('fetch', u, e);
    		if(!u) {
    			setTimeout(function() {
    			// rc => receive
    			ig.rc(u, e, {error: 'href must be specified'}, null);
    		}.bind(ig), 0);
    		} else if(u.match(/^data:/)) {
    		// handling data URI scheme
    		// p => pieces
    		// h => header
    		// b => body
    		var p = u.split(',');
    		var h = p[0];
    		var b = p[1];
    		if(h.indexOf(';base64') > -1) {
    			b = atob(b);
    		} else {
    			b = decodeURIComponent(b);
    		}
    		setTimeout(function() {
    			ig.rc(u, e, null, b);
    		}.bind(ig), 0);
    		} else {
    		// rx => Receiving XHR
    		// r => resource
    		// ru => redirected url
    		var rx = function(err, r, ru) {
    			ig.rc(u, e, err, r, ru);
    		}.bind(ig);
    		xhr.load(u, rx);
    		}
    	}

    	//
  	// Still more to code!
  	//
  	};

	// exports
	gems.loader = loader;
}
