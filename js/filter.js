'use strict';

(function () {

  var filterSelectElement = document.querySelector('#housing-type');
  var pinsContainer = document.querySelector('.map__pins');

  var onFilterChange = function (filterType) {

    window.pins.removePins();

    pinsContainer.appendChild(window.pins.renderPins(window.map.offers.filter(function (item) {
      return item.offer.type === filterType;
    })));
  };

  filterSelectElement.addEventListener('change', function (evt) {
    onFilterChange(evt.target.value);
    window.map.closePopUp();
  });

  window.filter = {
    onFilterChange: onFilterChange
  };
})();
