'use strict';

(function () {
  var button = document.querySelector('.map__pin--main');
  var map = document.querySelector('.map');

  var renderPins = function (array) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(window.map.createPin(array[i]));
    }

    return fragment;
  };


  button.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var currentY = button.offsetTop - shift.y;
      var currentX = button.offsetLeft - shift.x;

      if ((currentY > window.constants.MIN_MAIN_PIN_Y - window.constants.MAIN_PIN_HEIGHT)
      && (currentY < window.constants.MAX_MAIN_PIN_Y - window.constants.MAIN_PIN_HEIGHT)) {
        button.style.top = (button.offsetTop - shift.y) + 'px';
      }
      if ((currentX > 0) && (currentX < (map.offsetWidth - window.constants.MAIN_PIN_WIDTH))) {
        button.style.left = (button.offsetLeft - shift.x) + 'px';
      }

      window.form.formAddressValue(currentX + window.constants.MAIN_PIN_WIDTH / 2, currentY + window.constants.MAIN_PIN_HEIGHT);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      var shift = {
        x: startCoords.x - upEvt.clientX,
        y: startCoords.y - upEvt.clientY
      };

      startCoords = {
        x: upEvt.clientX,
        y: upEvt.clientY
      };

      var currentY = button.offsetTop - shift.y;
      var currentX = button.offsetLeft - shift.x;

      window.form.formAddressValue(currentX + window.constants.MAIN_PIN_WIDTH / 2, currentY + window.constants.MAIN_PIN_HEIGHT);

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.pins = {
    renderPins: renderPins
  };
})();
