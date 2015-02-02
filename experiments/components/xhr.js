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
	XMLHttpRequest.prototype.load = function(url, next, nextContext) {
	var request = new XMLHttpRequest();
    if (gems.flags.debug || gems.flags.bust) {
      url += '?' + Math.random();
    }
    request.open('GET', url, xhr.async);
    request.addEventListener('readystatechange', function(e) {
      if (request.readyState === 4) {
        // Servers redirecting an import add a Location header to help in polyfill correctly.
        var locationHeader = request.getResponseHeader("Location");
        var redirectedUrl = null;
        if (locationHeader) {
        	// location is a relative path
        	// full path
         	redirectedUrl = (locationHeader.substr( 0, 1 ) === "/") ? location.origin + locationHeader : locationHeader;                    
        }
        next.call(nextContext, !xhr.ok(request) && request,
            request.response || request.responseText, redirectedUrl);
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
	XMLHttpRequest.prototype.loadDocument = function(url, next, nextContext) {
		ig.load(url, next, nextContext).responseType = 'document';
	};
};
