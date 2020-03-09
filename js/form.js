'use strict';

(function () {
  var map = document.querySelector('.map');
  var pinsContainer = document.querySelector('.map__pins');
  var mapPinMain = document.querySelector('.map__pin--main');
  var capacity = document.querySelector('#capacity');
  var rooms = document.querySelector('#room_number');
  var formAddress = document.querySelector('#address');
  var formTimeIn = document.querySelector('#timein');
  var formTimeOut = document.querySelector('#timeout');
  var housePrice = document.querySelector('#price');
  var houseType = document.querySelector('#type');
  var form = document.querySelector('.ad-form');

  var activatePage = function () {
    map.classList.remove('map--faded');
    form.classList.remove('ad-form--disabled');
    window.util.disabledInput(false);
    pinsContainer.appendChild(window.pins.renderPins(window.map.offers.slice(0, window.constants.PINS_NUMBER)));
  };

  mapPinMain.addEventListener('mousedown', function () {
    window.load.request(window.load.onSuccess, window.load.onError);
  });

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      activatePage();
    }
  });

  var formRoomsGuest = function (evt) {
    var value = evt.target.value;
    var options = capacity.options;
    var optionsLength = options.length;
    var availableOptions = window.constants.COMPLIANCE_OPTIONS[value];

    for (var i = 0; i < optionsLength; i++) {
      if (availableOptions.indexOf(options[i].value) !== -1) {
        options[i].disabled = false;
        if (options[i].value === value || availableOptions.length === 1) {
          options[i].selected = true;
        }
      } else {
        options[i].disabled = true;
      }
    }
  };

  rooms.addEventListener('change', formRoomsGuest);

  var formAddressValue = function () {
    var currentY = mapPinMain.offsetTop;
    var currentX = mapPinMain.offsetLeft;

    formAddress.value = (currentX + ', ' + currentY);
  };

  formAddressValue();

  formTimeIn.addEventListener('change', function (evt) {
    formTimeOut.value = evt.target.value;
  });

  var houseTypePrice = function () {
    housePrice.min = window.constants.HOUSETYPES_PRICE[houseType.value.toUpperCase()];
    housePrice.placeholder = window.constants.HOUSETYPES_PRICE[houseType.value.toUpperCase()];
  };

  houseType.addEventListener('change', houseTypePrice);

  window.form = {
    formAddressValue: formAddressValue,
    activatePage: activatePage
  };
})();
