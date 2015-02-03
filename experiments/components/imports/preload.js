var preload = function() {
	'use strict';
	/*
	Modules:-
	1. onPreload
	2. _preload
	*/
	var onPreload;
	preload.onPreload = function(a, pl) {
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
	var _preload;
	preload._preload = function(a, pl) {
		// a => asset
		// s => state
		// pl => preloaded
		if(a.s === undefined) {
			a.s = pl;
			a.onPreload = [];
			var la, u, t; // la => load assets
			la({
				// u => url
				// t => type
				u: a.u,
				t: "cache"
			});
		}
	};
};
