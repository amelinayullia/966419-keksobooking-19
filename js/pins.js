'use strict';

(function () {
  var renderPins = function (array) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(window.map.createPin(array[i]));
    }

    return fragment;
  };

  window.pins = {
    renderPins: renderPins
  };
})();
