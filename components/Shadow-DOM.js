/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function() {

var thisFile = 'ShadowDOM.js';
var base = '';
Array.prototype.forEach.call(document.querySelectorAll('script[src]'), function(s) {
  var src = s.getAttribute('src');
  var re = new RegExp(thisFile + '[^\\\\]*');
  var match = src.match(re);
  if (match) {
    base = src.slice(0, -match[0].length);
  }
});

[
  'WeakMap.js',
  'core/wrappers.js',
  'core/ArraySplice.js',
  'core/microtask.js',
  'core/MutationObserver.js',
  'core/TreeScope.js',
  'core/wrappers/events.js',
  'core/wrappers/TouchEvent.js',
  'core/wrappers/NodeList.js',
  'core/wrappers/HTMLCollection.js',
  'core/wrappers/Node.js',
  'core/querySelector.js',
  'core/wrappers/node-interfaces.js',
  'core/wrappers/CharacterData.js',
  'core/wrappers/Text.js',
  'core/wrappers/DOMTokenList.js',
  'core/wrappers/Element.js',
  'core/wrappers/HTMLElement.js',
  'core/wrappers/HTMLCanvasElement.js',
  'core/wrappers/HTMLContentElement.js',
  'core/wrappers/HTMLFormElement.js',
  'core/wrappers/HTMLImageElement.js',
  'core/wrappers/HTMLShadowElement.js',
  'core/wrappers/HTMLTemplateElement.js',
  'core/wrappers/HTMLMediaElement.js',
  'core/wrappers/HTMLAudioElement.js',
  'core/wrappers/HTMLOptionElement.js',
  'core/wrappers/HTMLSelectElement.js',
  'core/wrappers/HTMLTableElement.js',
  'core/wrappers/HTMLTableSectionElement.js',
  'core/wrappers/HTMLTableRowElement.js',
  'core/wrappers/HTMLUnknownElement.js',
  'core/wrappers/SVGElement.js',
  'core/wrappers/SVGUseElement.js',
  'core/wrappers/SVGElementInstance.js',
  'core/wrappers/CanvasRenderingContext2D.js',
  'core/wrappers/WebGLRenderingContext.js',
  'core/wrappers/Range.js',
  'core/wrappers/generic.js',
  'core/wrappers/ShadowRoot.js',
  'core/ShadowRenderer.js',
  'core/wrappers/elements-with-form-property.js',
  'core/wrappers/Selection.js',
  'core/wrappers/Document.js',
  'core/wrappers/Window.js',
  'core/wrappers/DataTransfer.js',
  'core/wrappers/FormData.js',
  'core/wrappers/XMLHttpRequest.js',
  'core/wrappers/override-constructors.js'
].forEach(function(src) {
  document.write('<script src="' + base + src + '"></script>');
});

})();
