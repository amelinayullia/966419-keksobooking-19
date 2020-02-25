'use strict';

(function () {
  var inputs = document.querySelectorAll('.map__features, .map__filter, .ad-form__element, .ad-form-header');

  var removeChilds = function (parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  };

  var getArrayOfRandomItemFrom = function (array, count) {
    var newArray = [];

    for (var i = 0; i < count; i++) {
      var randomItem = getRandomItemFrom(array);

      if (newArray.includes(randomItem)) {
        continue;
      } else {
        newArray.push(randomItem);
      }
    }

    return newArray;
  };

  var getRandomValue = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };

  var getRandomItemFrom = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  // Делает страницу при открытии неактивной, а принажатии на пин активной
  var disabledInput = function (state) {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = state;
    }
  };

  disabledInput(true);

  window.util = {
    removeChilds: removeChilds,
    getArrayOfRandomItemFrom: getArrayOfRandomItemFrom,
    getRandomValue: getRandomValue,
    getRandomItemFrom: getRandomItemFrom,
    disabledInput: disabledInput
  };
})();

