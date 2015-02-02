var xhr = function(gems) {
	'use strict';
	var ig = this;
	var unwrap = gems.unwrap;

	// request => ok!
	var request = XMLHttpRequest.prototype.ok;
	XMLHttpRequest.prototype.ok = function() {
		return (request.status >= 200 && request.status < 300) || (request.status === 304) || (request.status === 0);
	};

	// sending request
	var SendReq = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.send = function(obj) {
		return SendReq.call(ig, unwrap(obj));
	};

	//
	// Still more to code!
	//
};
