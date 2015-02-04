var xhr = function(gems) {
	// gems => scope
	'use strict';
	var ig = this;
	var unwrap = gems.unwrap;

	// request => ok!
	XMLHttpRequest.prototype.ok = function() {
		var request = XMLHttpRequest.prototype.ok;
		return (request.status >= 200 && request.status < 300) || (request.status === 304) || (request.status === 0);
	};

	// loading the request
	XMLHttpRequest.prototype.load = function(u, nxt, nc) {
		// u => url
		// lh => Location Header
		// ff => flags
		// ru => Redirected Url
		// nxt => next
		// nc => Next Context
	var request = new XMLHttpRequest();
    if (gems.ff.debug || gems.ff.bust) {
      u += '?' + Math.random();
    }
    request.open('GET', u, xhr.async);
    request.addEventListener('readystatechange', function(e) {
      if (request.readyState === 4) {
        // Servers redirecting an import add a Location header to help in polyfill correctly.
        var lh = request.getResponseHeader("Location");
        var ru = null;
        if (lh) {
        	// location is a relative path
        	// full path
         	ru = (lh.substr( 0, 1 ) === "/") ? location.origin + lh : lh;                    
        }
        nxt.call(nc, !xhr.ok(request) && request,
            request.response || request.responseText, ru);
      } });
    // sending request
    request.send();
    return request;
	};

	/*
	var request = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.send = function(obj) {
		return request.call(ig, unwrap(obj));
	};
	*/

	// loading the document
	XMLHttpRequest.prototype.loadDocument = function(u, nxt, nc) {
		ig.load(u, nxt, nc).responseType = 'document';
	};
};
