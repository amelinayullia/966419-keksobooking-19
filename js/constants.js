'use strict';

(function () {
  var OFFERS_AMOUNT = 8;

  var URL_LOAD = 'https://js.dump.academy/keksobooking/data';
  var URL_UPLOAD = 'https://js.dump.academy/keksobooking';
  var TIMEOUT_IN_MS = 10000;

  var MIN_MAIN_PIN_Y = 130;
  var MAX_MAIN_PIN_Y = 630;
  var MAIN_PIN_WIDTH = 65;
  var MAIN_PIN_HEIGHT = 81;
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var PINS_NUMBER = 5;
  var PRICE_MIN = 10000;
  var PRICE_MAX = 50000;
  var DEBOUNCE_INTERVAL = 500; // ms
  var PHOTO_WIDTH = 70;
  var PHOTO_HEIGHT = 70;


  var LocalizedOfferType = {
    'flat': 'Квартира',
    'bungalo': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
  };

  var ComplianceOptions = {
    '1': ['1'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '100': ['0']
  };

  var HouseTypesPrice = {
    BUNGALO: 0,
    FLAT: 1000,
    HOUSE: 5000,
    PALACE: 10000
  };

  window.constants = {
    OFFERS_AMOUNT: OFFERS_AMOUNT,
    LocalizedOfferType: LocalizedOfferType,
    ComplianceOptions: ComplianceOptions,
    HouseTypesPrice: HouseTypesPrice,
    MIN_MAIN_PIN_Y: MIN_MAIN_PIN_Y,
    MAX_MAIN_PIN_Y: MAX_MAIN_PIN_Y,
    MAIN_PIN_WIDTH: MAIN_PIN_WIDTH,
    MAIN_PIN_HEIGHT: MAIN_PIN_HEIGHT,
    PIN_WIDTH: PIN_WIDTH,
    PIN_HEIGHT: PIN_HEIGHT,
    URL_LOAD: URL_LOAD,
    TIMEOUT_IN_MS: TIMEOUT_IN_MS,
    URL_UPLOAD: URL_UPLOAD,
    PINS_NUMBER: PINS_NUMBER,
    PRICE_MIN: PRICE_MIN,
    PRICE_MAX: PRICE_MAX,
    DEBOUNCE_INTERVAL: DEBOUNCE_INTERVAL,
    PHOTO_WIDTH: PHOTO_WIDTH,
    PHOTO_HEIGHT: PHOTO_HEIGHT
  };
})();
