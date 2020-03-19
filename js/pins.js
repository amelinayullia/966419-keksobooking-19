'use strict';

(function () {
  var mapPinMain = document.querySelector('.map__pin--main');
  var map = document.querySelector('.map');
  var pinsContainer = document.querySelector('.map__pins');

  var renderPins = function (array) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(window.map.createPin(array[i]));
    }

    return fragment;
  };

  var getMainPinCoords = function () {
    return {
      x: parseInt(mapPinMain.style.left, 10),
      y: parseInt(mapPinMain.style.top, 10)
    };
  };

  var initialPinCoord = getMainPinCoords();

  var resetMainPin = function () {
    mapPinMain.style.top = initialPinCoord.y + 'px';
    mapPinMain.style.left = initialPinCoord.x + 'px';
  };


  mapPinMain.addEventListener('mousedown', function (evt) {
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

      var currentY = mapPinMain.offsetTop - shift.y;
      var currentX = mapPinMain.offsetLeft - shift.x;

      if ((currentY > window.constants.MIN_MAIN_PIN_Y - window.constants.MAIN_PIN_HEIGHT)
      && (currentY < window.constants.MAX_MAIN_PIN_Y - window.constants.MAIN_PIN_HEIGHT)) {
        mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
      }
      if ((currentX > 0) && (currentX < (map.offsetWidth - window.constants.MAIN_PIN_WIDTH))) {
        mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';
      }

      window.form.setFormAddressValue(currentX + window.constants.MAIN_PIN_WIDTH / 2, currentY + window.constants.MAIN_PIN_HEIGHT);
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

      var currentY = mapPinMain.offsetTop - shift.y;
      var currentX = mapPinMain.offsetLeft - shift.x;

      window.form.setFormAddressValue(currentX + window.constants.MAIN_PIN_WIDTH / 2, currentY + window.constants.MAIN_PIN_HEIGHT);

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var removePins = function () {
    var pins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    for (var i = 0; i < pins.length; i++) {
      pinsContainer.removeChild(pins[i]);
    }
  };

  window.pins = {
    renderPins: renderPins,
    removePins: removePins,
    resetMainPin: resetMainPin
  };
})();
