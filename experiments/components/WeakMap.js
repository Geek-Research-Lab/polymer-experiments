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
			var ent;
			return (ent = k[ig.name]) && ent[0] === k ? ent[1] : undefined;
		},
	//
	// Still more to code!
	//
	};
};

/*
Credits
[1] http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap-constructor
[2] https://github.com/webcomponents/webcomponentsjs/blob/master/src/WeakMap/WeakMap.js
*/
