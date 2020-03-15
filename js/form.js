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
  var mapFilters = document.querySelector('.map__filters');
  var formReset = document.querySelector('.ad-form__reset');


  var activatePage = function () {
    map.classList.remove('map--faded');
    form.classList.remove('ad-form--disabled');
    window.util.disabledInput(false);
    pinsContainer.appendChild(window.pins.renderPins(window.map.offers.slice(0, window.constants.PINS_NUMBER)));
  };

  var changeFilter = function (evt) {
    return function () {
      window.map.closePopUp();
      window.pins.removePins();

      var filterName = evt.target.id;
      var filterValue = evt.target.value;
      if (evt.target.name === 'features') {
        window.filter.changeFeatures(filterValue, evt.target.checked);
      } else {
        window.filter.change(filterName, filterValue);
      }

      var pins = window.filter.apply(window.map.offers).slice(0, window.constants.PINS_NUMBER);

      pinsContainer.appendChild(window.pins.renderPins(pins));
    };
  };

  mapFilters.addEventListener('change', function (evt) {
    window.debounce(changeFilter(evt));
  });

  var resetPage = function () {
    form.reset();
    mapFilters.reset();
    map.classList.add('map--faded');
    form.classList.add('ad-form--disabled');
    window.util.disabledInput(true);
    window.pins.removePins();
    formAddressValue();
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

  formReset.addEventListener('click', function () {
    resetPage();
  });

  window.form = {
    formAddressValue: formAddressValue,
    activatePage: activatePage,
    resetPage: resetPage
  };
})();
