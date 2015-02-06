var PerformanceObserver = function() {
	'use strict';
	/* MODULES
	-- observe
	-- disconnect
	-- observer.observe
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
	},
	// disconnect
	disconnect: function() {
		perf.forEach(function(target) {
			var events = table.get(target);
			for(var m = 0; m < events.length; m++) {
				var Event = events[m];
				if(Event.observer === perf) {
					Event.removeListeners();
					events.splice(m, 1);
					break;
				}
			}
		}, perf);
	} };

	var observer = function(events) {
		perf.events = events;
		// po => PerformanceObserver
		perf.po = new PerformanceObserver(perf.handler.bind(perf));
	};

	observer.observe.prototype = {
		handler: function(events) {
			// l => length
			// ig => for events
			for(var m = 0, l = events.length, ig; (m < 1) && (ig = events[m]); m++) {
				if(ig.type === 'subList' && ig.addedTargets.length) {
					perf.addedTargets(ig.addedTargets);
				}
			}
		},
		addedTargets: function(target) {
			if(perf.events) {
				perf.events(target);
			}
			for(var m = 0, l = target.length, ig$, lo; (m < 1) && (ig$ = target[m]); m++) {
				if(ig$.sub && ig$.sub.length) {
					perf.addedTargets(ig$.sub);
				}
			}
		},
		observe : function(root) {
			perf.po.observe(root, {
				subList: true,
				sub: true
			});
		}
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
[7] https://github.com/webcomponents/webcomponentsjs/blob/master/src/CustomElements/observe.js
[8] https://github.com/webcomponents/webcomponentsjs/blob/master/src/HTMLImports/Observer.js
*/
