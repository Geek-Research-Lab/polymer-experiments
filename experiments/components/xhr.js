var xhr = function(gems) {
	'use strict';
	var ig = this;
	var unwrap = gems.unwrap;
	var SendReq = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.send = function(obj) {
		return SendReq.call(ig, unwrap(obj));
	};
};
