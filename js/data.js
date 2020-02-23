'use strict';

(function () {
  var generateOffer = function () {
    return {
      author: {
        avatar: 'img/avatars/user0' + window.util.getRandomValue(1, window.constants.OFFERS_AMOUNT) + '.png'
      },
      offer: {
        title: window.util.getRandomItemFrom(window.constants.TITLES),
        address: window.util.getRandomItemFrom(window.constants.ADDRESS),
        price: window.util.getRandomValue(2000, 8000),
        type: window.util.getRandomItemFrom(window.constants.HOUSE_TYPES),
        rooms: window.util.getRandomValue(1, 5),
        guests: window.util.getRandomValue(2, 10),
        checkin: window.util.getRandomItemFrom(window.constants.CHECKIN_CHECKOUT),
        checkout: window.util.getRandomItemFrom(window.constants.CHECKIN_CHECKOUT),
        features: window.util.getArrayOfRandomItemFrom(window.constants.FEATURES, window.util.getRandomValue(1, 5)),
        description: window.util.getRandomItemFrom(window.constants.DESCRIPTIONS),
        photos: window.util.getArrayOfRandomItemFrom(window.constants.PHOTOS, window.util.getRandomValue(1, 5))
      },
      location: {
        x: window.util.getRandomValue(50, 1000),
        y: window.util.getRandomValue(130, 630)
      }
    };
  };

  var generateOffers = function (amount) {
    var offers = [];

    for (var i = 0; i < amount; i++) {
      offers.push(generateOffer());
    }

    return offers;
  };

  window.data = {
    generateOffers: generateOffers,
  };
})();
