var preload = function() {
	'use strict';
	/*
	Modules:-
	1. onPreload
	2. _preload
	*/
	var onPreload;
	preload.onPreload = function(a, s, l) {
		// a => asset
		// s => state
		// pl => preloaded
		// e => each
		a.s = pl;
		e(a.pl, function (ppl) {
			// ppl => Post-Preload
			ppl.call();
		});
	};
	//
	// Still more to code
	//
};
