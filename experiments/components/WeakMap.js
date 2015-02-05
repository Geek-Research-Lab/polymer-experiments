// WeakMap
var WeakMap = function() {
	'use strict';
	/* MODULES
	-- set
	-- get
	-- delete
	-- has
	////////
	1. WeakMap.prototype.constructor
	2. WeakMap.prototype.delete(key)
	3. WeakMap.prototype.get(key)
	4. WeakMap.prototype.has(key)
	5. WeakMap.prototype.set(key, value)
	6. WeakMap.prototype[@@toStringTag]
	////////
	// reference:-
	WeakMap.prototype
	http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap.prototype
	//////////////
	*/
	var ig = this;
	WeakMap.prototype = {

		// set
		// WeakMap.prototype.set(k, v)
		set: function(k, v) {
			// k => key
			// v => value
			// ent => entry
			var ent = k[ig.name];
			if(ent && ent[0] === k) {
				ent[1] = v;
			} else { // w => writable
				defineProperty(k, ig.name, {v: [k, v], w: true});
			}
			return ig;
		},

		// get
		// WeakMap.prototype.get(k)
		get: function(k) {
			var ent = k[ig.name];
			return ent && ent[0] === k ? ent[1] : undefined;
		},

		// delete
		// WeakMap.prototype.delete(k)
		delete: function(k) {
			var ent = k[ig.name];
			if(!ent || ent[0] !== k) {
				return false;
			}
			ent[0] = ent[1] = undefined;
			return true;
		},

		// has
		// WeakMap.prototype.has(k)
		has: function(k) {
			var ent = k[ig.name];
			if(!ent) {
				return false;
			}
			return ent[0] === k;
		}
	};
	window.WeakMap = WeakMap;
};

/*
Intro --
http://wiki.ecmascript.org/doku.php?id=harmony:weak_maps
*/

/*
Credits
[1] http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap-constructor
[2] https://github.com/webcomponents/webcomponentsjs/blob/master/src/WeakMap/WeakMap.js
*/

/*
PDFs:-
[1] http://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf

Other Links to explore:-
[1] http://docs.racket-lang.org/reference/ephemerons.html
[2] https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmPractical.html
[3] http://weblog.ikvm.net/PermaLink.aspx?guid=7f47ad08-cdef-4dc2-b2fd-5dfdc1baf11d
[4] https://msdn.microsoft.com/en-us/library/dd287757(v=vs.100).aspx
[5] http://www.gnu.org/software/mit-scheme/documentation/mit-scheme-ref/Ephemerons.html
*/
