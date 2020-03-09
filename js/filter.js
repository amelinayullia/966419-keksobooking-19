'use strict';

(function () {
  window.filter = function (offers) {
    var filters = document.querySelector('.map__filters');
    var filtersSelects = filters.querySelectorAll('select');

    var filterState = {
      features: []
    };

    filtersSelects.forEach(function (element) {
      filterState[element.name.split('-')[1]] = element.value;
    });

    var checkValue = function (elementValue, filterStateValue) {
      return filterStateValue === 'any' || filterStateValue === elementValue.toString();
    };

    var filterOffers = offers.slice();
    return filterOffers.filter(function (element) {
      return checkValue(element.offer.type, filterState.type);
    });
  };
})();
