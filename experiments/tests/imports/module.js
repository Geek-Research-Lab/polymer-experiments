var module = function(gems) {
	'use strict';
	var modules = [];

	// Adding modules
	var addModule = function(module) {
		modules.push(module);
	};

	// Initializing modules
	var initModules = function() {
		modules.forEach(function (module) {
			module(gems);
		});
	};

	// Exporting
	gems.addModule = addModule;
	gems.initModules = initModules;
};
