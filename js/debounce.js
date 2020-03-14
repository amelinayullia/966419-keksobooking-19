'use strict';

(function () {
  var lastTimeout;

  var changeFilterDebounce = function (callback) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(callback, window.constants.DEBOUNCE_INTERVAL);
  };

  window.debounce = {
    changeFilterDebounce: changeFilterDebounce
  };
})();
