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

  var onChangeFilter = function (evt) {
    var filterName = evt.target.id;
    var filterValue = evt.target.value;
    if (evt.target.name === 'features') {
      window.filter.changeFeatures(filterValue, evt.target.checked);
    } else {
      window.filter.change(filterName, filterValue);
    }

    return function () {
      window.map.closePopUp();
      window.pins.removePins();

      var pins = window.filter.apply(window.map.offers).slice(0, window.constants.PINS_NUMBER);

      pinsContainer.appendChild(window.pins.renderPins(pins));
    };
  };

  var resetPage = function () {
    form.reset();
    mapFilters.reset();
    window.filter.reset();
    map.classList.add('map--faded');
    form.classList.add('ad-form--disabled');
    window.pins.removePins();
    window.util.disabledInput(true);
    window.pins.resetMainPin();
    setFormAddressValue();
    window.avatar.onRemoveFileChooser();
    window.map.closePopUp();
    onHouseTypePrice();
    onCapacitySync();
  };

  var onCapacitySync = function () {
    var guests = window.constants.ComplianceOptions[rooms.value];

    Array.from(capacity.options).forEach(function (element) {
      if (guests.includes(element.value)) {
        element.disabled = false;
      } else {
        element.disabled = true;
      }
    });
  };

  onCapacitySync();

  var onCheckCapacity = function () {
    var validityMessage;
    if (rooms.value !== '100') {
      validityMessage = (capacity.value !== '0' && capacity.value <= rooms.value) ?
        '' :
        'Для выбранного количества комнат укажите количество гостей отличное от "Не для гостей", но не более ' + rooms.value;
    } else {
      validityMessage = (capacity.value !== '0') ?
        'Для выбранного количества комнат возможное количество гостей  - "Не для гостей"' :
        '';
    }

    capacity.setCustomValidity(validityMessage);
  };

  var setFormAddressValue = function () {
    var currentY = Math.floor(mapPinMain.offsetTop + window.constants.MAIN_PIN_HEIGHT);
    var currentX = Math.floor(mapPinMain.offsetLeft + (window.constants.MAIN_PIN_WIDTH / 2));


    formAddress.value = (currentX + ', ' + currentY);
  };

  setFormAddressValue();

  var onHouseTypePrice = function () {
    housePrice.min = window.constants.HouseTypesPrice[houseType.value.toUpperCase()];
    housePrice.placeholder = window.constants.HouseTypesPrice[houseType.value.toUpperCase()];
  };

  var onSuccess = function (array) {
    window.map.offers = array;
    window.form.activatePage();
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: white;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '20px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  mapFilters.addEventListener('change', function (evt) {
    window.debounce(onChangeFilter(evt));
  });

  mapPinMain.addEventListener('mousedown', function () {
    window.load.request(window.load.onSuccess, window.load.onError);
  });

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      activatePage();
    }
  });

  formTimeIn.addEventListener('change', function (evt) {
    formTimeOut.value = evt.target.value;
  });

  formTimeOut.addEventListener('change', function (evt) {
    formTimeIn.value = evt.target.value;
  });

  houseType.addEventListener('change', onHouseTypePrice);

  formReset.addEventListener('click', function () {
    resetPage();
  });

  rooms.addEventListener('change', onCapacitySync);

  rooms.addEventListener('change', onCheckCapacity);

  capacity.addEventListener('change', onCheckCapacity);

  window.form = {
    setFormAddressValue: setFormAddressValue,
    activatePage: activatePage,
    resetPage: resetPage,
    onSuccess: onSuccess,
    onError: onError
  };
})();
