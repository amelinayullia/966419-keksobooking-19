'use strict';

(function () {
  var templatePins = document.querySelector('#pin').content.querySelector('.map__pin');
  var map = document.querySelector('.map');

  var closePopUp = function () {
    var popup = document.querySelector('.popup');

    if (popup) {
      popup.remove();
    }
  };

  var createPin = function (offer) {
    var pin = templatePins.cloneNode(true);

    pin.style =
      'left:' + offer.location.x + 'px; top:' + offer.location.y + 'px;';
    pin.querySelector('img').src = offer.author.avatar;
    pin.querySelector('img').alt = offer.offer.title;

    var renderBidPicture = function () {
      closePopUp();

      map.appendChild(window.card.createCard(offer));

      var buttonClosePopup = function () {
        closePopUp();
      };

      document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
          buttonClosePopup();
        }
      });

      var popupClose = document.querySelector('.popup__close');

      popupClose.addEventListener('click', buttonClosePopup);
    };

    pin.addEventListener('click', renderBidPicture);

    return pin;
  };

  var offers = window.data.generateOffers(window.constants.OFFERS_AMOUNT);

  window.map = {
    createPin: createPin,
    offers: offers
  };
})();
