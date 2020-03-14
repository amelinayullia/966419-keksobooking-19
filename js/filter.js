'use strict';

(function () {
  var filterState = {
    'housing-type': 'any',
    'housing-rooms': 'any',
    'housing-guests': 'any',
    'housing-price': 'any',
    'features': {}
  };

  var getPriceValue = function (price) {
    if (price > window.constants.PRICE_MAX) {
      return 'high';
    } else if (price < window.constants.PRICE_MIN) {
      return 'low';
    }

    return 'middle';
  };

  var checkPrice = function (elementValue, filterStateValue) {
    return filterStateValue === 'any' || filterStateValue === getPriceValue(elementValue);
  };

  var checkValue = function (elementValue, filterStateValue) {
    return filterStateValue === 'any' || filterStateValue === elementValue.toString();
  };

  var apply = function (offers) {
    return offers.filter(function (element) {
      return checkValue(element.offer.type, filterState['housing-type']) &&
      checkValue(element.offer.guests, filterState['housing-guests']) &&
      checkValue(element.offer.rooms, filterState['housing-rooms']) &&
      checkPrice(element.offer.price, filterState['housing-price']);
    });
  };

  var change = function (key, value) {
    filterState[key] = value;
  };

  var changeFeatures = function (key, value) {
    filterState.features[key] = value;
  };

  window.filter = {
    apply: apply,
    change: change,
    changeFeatures: changeFeatures
  };
})();
