var PerformanceObserver = function() {
	'use strict';
	/* MODULES
	-- observe
	-- disconnect
	*/
	var perf = this;
	PerformanceObserver.prototype = {
	// observe
	observe: function(target, opts) {
		var events = table.get(target);
		if(!events) {
			table.set(target, events = []);
		}
		var Event;
		for(var m = 0; m < events.length; m++) {
			if(events[m].observer === perf) {
				Event = events[m];
				Event.removeListeners();
				Event.options = opts;
				break;
			}
		}
		if(!Event) {
			Event = new Event(perf, target, opts);
			events.push(Event);
			perf.push(target);
		}
		Event.addListeners();
	}
	//
	// Still more to code
	//
	};
};

/* References:-
[1] http://w3c.github.io/performance-timeline/#sec-performance-timeline
[2] http://addyosmani.com/blog/the-future-of-data-binding-is-object-observe/
*/
/* Other References:-
[1] https://dom.spec.whatwg.org/#mutation-observers
[2] https://code.google.com/p/mutation-summary/
[3] http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers
[4] http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
[5] https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver?redirectlocale=en-US&redirectslug=DOM%2FMutationObserver
[6] https://github.com/webcomponents/webcomponentsjs/blob/master/src/MutationObserver/MutationObserver.js
*/
