'use strict';

(function () {
  var filterState = {
    'housing-type': 'any',
    'housing-rooms': 'any',
    'housing-guests': 'any',
    'features': {}
  };

  var checkHouseType = function (elementValue, filterStateValue) {
    return filterStateValue === 'any' || filterStateValue === elementValue.toString();
  };

  var apply = function (offers) {
    return offers.filter(function (element) {
      return checkHouseType(element.offer.type, filterState['housing-type']);
    });
  };

  var change = function (key, value) {
    filterState[key] = value;
  };

  var changeFilter = function (key, value) {
    filterState.features[key] = value;
  };

  window.filter = {
    apply: apply,
    change: change,
    changeFilter: changeFilter
  };
})();
