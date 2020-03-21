'use strict';

(function () {
  var templatePins = document.querySelector('#pin').content.querySelector('.map__pin');
  var map = document.querySelector('.map');

  var onEscKeydown = function (evt) {
    if (evt.key === 'Escape') {
      onClosePopup();
    }
  };

  var onClosePopup = function () {
    closePopUp();
  };

  var closePopUp = function () {
    var popup = document.querySelector('.popup');

    if (popup) {
      popup.remove();
      document.removeEventListener('keydown', onEscKeydown);
    }
  };

  var renderBidPicture = function (offer) {
    closePopUp();

    map.appendChild(window.card.createCard(offer));

    document.addEventListener('keydown', onEscKeydown);

    var popupClose = document.querySelector('.popup__close');

    popupClose.addEventListener('click', onClosePopup);
  };

  var createPin = function (offer) {
    var pin = templatePins.cloneNode(true);

    pin.style =
      'left:' + (offer.location.x - window.constants.PIN_WIDTH / 2) + 'px; top:' + (offer.location.y - window.constants.PIN_HEIGHT) + 'px;';
    pin.querySelector('img').src = offer.author.avatar;
    pin.querySelector('img').alt = offer.offer.title;

    var onClick = function () {
      renderBidPicture(offer);
    };

    pin.addEventListener('click', onClick);

    return pin;
  };

  window.map = {
    createPin: createPin,
    closePopUp: closePopUp
  };
})();
