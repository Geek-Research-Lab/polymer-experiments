var PerformanceObserver = function() {
	'use strict';
	/* MODULES 
	1. PerformanceObserver.prototype
	-- observe
	-- connect (init)
	-- measure performance
	-- disconnect
	2. observer.observe.prototype
	-- handler
	-- addedTargets
	-- observe
	3. Event.prototype
	-- add observer
	-- remove observer
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
	// connect --- initializing
	connect: function() {
		perf.mark("startWork"); // see [[User Timing]]
		doWork(); // Some developer code
		perf.mark("endWork");
		measurePerf();
	},
	// measure performance
	measurePerf: function() {
		var perfEntries = performance.getEntries();
		for (var m = 0; m < perfEntries.length; m++)
		{
			if (window.console) {
				console.log("Name:"+ perfEntries[i].name + " Entry Type: " + perfEntries[i].entryType + " Start Time: " + perfEntries[i].startTime + " Duration: " + perfEntries[i].duration + "\n");
			}
		}
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

Event.prototype = {
	// add observer => A 'transient observer' is added that can last for a 'short period of time'.
	addObserver: function(target) {
		// Don't add or include transient observer on the 'target' itself
		// Listeners are already setup on the target
		if(target === perf.target) {
			return;
		}

		// Make sure to remove transient observers at the end of 'microtask'.
		/*
		[a] http://www.w3.org/TR/html5/webappapis.html#calling-scripts
		[b] https://hg.mozilla.org/mozilla-central/rev/77f0e7d882dd
		*/
		// Scheduling callback => Allows to execute the task immediately
		callback(perf.observer);
		perf.observedTargets.push(target);
		var events = table.get(target);
		if(!events) {
			table.set(target, events = []);
		}
		events.push(perf);
	},

	// remove observer
	removeObserver: function() {
		var observedTargets = perf.observedTargets;
		perf.observedTargets = [];
		for(var m = 0; m < observedTargets.length; m++) {
			var target = observedTargets[m];
			var events = table.get(target);
			for(var ig = 0; ig < events.length; ig++) {
				if(events[ig] === perf) {
					events.splice(ig, 1);
					break;
				}
			}
		}
	}
};

};

/* References:-
[1] https://w3c.github.io/performance-timeline
[2] http://addyosmani.com/blog/the-future-of-data-binding-is-object-observe/
[3] https://developer.chrome.com/devtools/docs/timeline#loading-event-properties
[4] https://lists.w3.org/Archives/Public/public-web-perf/
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
[9] https://github.com/webcomponents/webcomponentsjs/blob/master/src/ShadowDOM/MutationObserver.js
[10] http://www.w3.org/html/wg/drafts/html/master/
[11] https://github.com/w3c/performance-timeline/tree/performanceobserver
[12] http://www.w3.org/TR/dom/#mutation-observers
*/
