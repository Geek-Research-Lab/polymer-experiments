/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function() {
  var thisFile = 'polymer-gestures.js';
  var scopeName = 'PolymerGestures';
  var modules = [
    'gestures/scope.js',
    'gestures/targetfind.js',
    'gestures/touch-action.js',
    'gestures/eventFactory.js',
    'gestures/pointermap.js',
    'gestures/dispatcher.js',
    'gestures/mouse.js',
    'gestures/touch.js',
    'gestures/ms.js',
    'gestures/pointer.js',
    'gestures/platform-events.js',
    'gestures/track.js',
    'gestures/hold.js',
    'gestures/tap.js',
    'gestures/pinch.js'
  ];

  window[scopeName] = {
    entryPointName: thisFile,
    modules: modules
  };

  var script = document.currentScript || document.querySelector('script[src $= "' + thisFile + '"]');
  var src = script.attributes.src.value;
  var basePath = src.slice(0, src.indexOf(thisFile));

  if (!window.PolymerLoader) {
    var path = basePath + '../tools/loader/loader.js';
    document.write('<script src="' + path + '"></script>');
  }

  document.write('<script>PolymerLoader.load("' + scopeName + '")</script>');

})();
