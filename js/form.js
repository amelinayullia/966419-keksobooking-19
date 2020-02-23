'use strict';

(function () {
  var map = document.querySelector('.map');
  var pinsContainer = document.querySelector('.map__pins');
  var button = document.querySelector('.map__pin--main');
  var capacity = document.querySelector('#capacity');
  var rooms = document.querySelector('#room_number');
  var formAddress = document.querySelector('#address');
  var formTimeIn = document.querySelector('#timein');
  var formTimeOut = document.querySelector('#timeout');
  var housePrice = document.querySelector('#price');
  var houseType = document.querySelector('#type');

  var activatePage = function () {
    map.classList.remove('map--faded');
    window.util.disabledInput(false);
    pinsContainer.appendChild(window.pins.renderPins(window.map.offers));
  };

  button.addEventListener('mousedown', activatePage);

  button.addEventListener('keydown', function (evt) {
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
    var currentY = button.offsetTop;
    var currentX = button.offsetLeft;

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
})();
