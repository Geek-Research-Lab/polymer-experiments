var module = ['module.js'];
var boot;
module.boot = function(gems) {
	var InitModules = gems.InitModules;
	InitModules();
};
