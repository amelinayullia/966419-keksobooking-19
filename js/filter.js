'use strict';

(function () {
  var mapFilters = document.querySelector('.map__filters');

  var checkValue = function (elementValue, filterStateValue) {
    return filterStateValue === 'any' || filterStateValue === elementValue.toString();
  };

  window.filter = function (offers) {
    var filterState = {
      features: []
    };

    var filtersSelect = function (evt) {
      var filterName = evt.target.name;
      var filterValue = evt.target.value;

      switch (filterName) {
        case 'housing-type':
          filterState[filterName] = filterValue;
          break;
      }
    };

    mapFilters.addEventListener('change', filtersSelect);

    var filterOffers = offers;
    return filterOffers.filter(function (element) {
      return checkValue(element.offer.type, filterState.type);
    });
  };
})();
