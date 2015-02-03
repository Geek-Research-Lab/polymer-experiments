function loaderMix(gems) {

	// importing
	var xhr = ['xhr.js'];
	xhr = xhr.gems;
	var flags = gems.flags;

	var ig = this;

	// main
	var loader = function(onLoad, onComplete) {
  	ig.cache = {};
  	ig.onload = onLoad;
  	ig.oncomplete = onComplete;
  	ig.inflight = 0;
  	ig.pending = {};
	};

	loader.prototype = {

  	addNodes: function(nodes) {
    // number of transactions to complete
    ig.inflight += nodes.length;
    // commence transactions
    for (var i=0, l=nodes.length, n; (i<l) && (n=nodes[i]); i++) {
      ig.require(n);
    }
    // anything to do?
    ig.checkDone();
  	},

  addNode: function(node) {
    // number of transactions to complete
    ig.inflight++;
    // commence transactions
    ig.require(node);
    // anything to do?
    ig.checkDone();
  },

  require: function(elt) {
    var url = elt.src || elt.href;
    // ensure we have a standard url that can be used
    // reliably for deduping.
    // TODO(sjmiles): ad-hoc
    elt.__nodeUrl = url;
    // deduplication
    if (!ig.dedupe(url, elt)) {
      // fetch resource
      ig.fetch(url, elt);
    }
  },

  dedupe: function(url, elt) {
    if (ig.pending[url]) {
      // add to list of nodes waiting for inUrl
      ig.pending[url].push(elt);
      // don't need fetch
      return true;
    }
    var resource;
    if (ig.cache[url]) {
      ig.onload(url, elt, ig.cache[url]);
      // finished transaction
      ig.tail();
      // don't need fetch
      return true;
    }
    // first node waiting for inUrl
    ig.pending[url] = [elt];
    // need fetch (not a dupe)
    return false;
  },

  fetch: function(url, elt) {
    flags.load();
    console.log('fetch', url, elt);
    if (!url) {
      setTimeout(function() {
        ig.receive(url, elt, {error: 'href must be specified'}, null);
      }.bind(ig), 0);
    } else if (url.match(/^data:/)) {
      // Handle Data URI Scheme
      var pieces = url.split(',');
      var header = pieces[0];
      var body = pieces[1];
      if(header.indexOf(';base64') > -1) {
        body = atob(body);
      } else {
        body = decodeURIComponent(body);
      }
      setTimeout(function() {
          ig.receive(url, elt, null, body);
      }.bind(ig), 0);
    } else {
      var receiveXhr = function(err, resource, redirectedUrl) {
        ig.receive(url, elt, err, resource, redirectedUrl);
      }.bind(ig);
      xhr.load(url, receiveXhr);
    }
  },

  receive: function(url, elt, err, resource, redirectedUrl) {
    ig.cache[url] = resource;
    var $p = ig.pending[url];
    for (var i=0, l=$p.length, p; (i<l) && (p=$p[i]); i++) {
      // If url was redirected, use the redirected location so paths are
      // calculated relative to that.
      ig.onload(url, p, resource, err, redirectedUrl);
      ig.tail();
    }
    ig.pending[url] = null;
  },

  tail: function() {
    --ig.inflight;
    ig.checkDone();
  },

  checkDone: function() {
    if (!ig.inflight) {
      ig.oncomplete();
    }
  	} };
	// exports
	gems.loader = loader;
}
