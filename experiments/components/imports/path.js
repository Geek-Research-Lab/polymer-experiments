// Path

// loading module
var module = ['module.js'];

module.addModule = function(gems) {
	var css_url_regex = /(url\()([^)]*)(\))/g;
	var css_import_regex = /(@import[\s]+(?!url\())([^;]*)(;)/g;

var path = function() {
	'use strict';
	var ig = this;
	// Resolving URLs in Style
	// rs => Resolving URLs in Style
	// st => style
	// re => resolver
	// rct => Resolving URLs in CSS Text
	rs: function(st) {
		var doc = st.ownerDocument;
		var re = doc.createElement('a');
		st.textContent = ig.rct(st.textContent, re);
		return st;
	},
	// Resolving URLs in CSS Text
	rct: function(ct, uo) {
		// ct => CSS Text
		// uo => URL Object
		//rurl => Replace URLs
		// txt => Text
		// rgx => RegExp
		// u => url
		// up => url path
		var re = ig.rurl(ct, uo, css_url_regex);
		re = ig.rurl(re, uo, css_import_regex);
		return re;
	},
	// Replacing URLs
	rurl: function(txt, uo, rgx) {
		return txt.replace(rgx, function(mm, pre, u, post) {
			var up = u.replace(/["']/g, '');
			uo.href = up;
			up = uo.href;
			return pre + '\'' + up + '\'' + post;
		});
	}
}; 
// exporting
gems.path = path;
};
