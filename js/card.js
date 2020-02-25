'use strict';

(function () {
  var templateCard = document.querySelector('#card').content.querySelector('.popup');
  var fragmentPhotos = document.createDocumentFragment();

  var getCardPhotosElement = function (photos) {

    for (var i = 0; i < photos.length; i++) {
      var photo = document.createElement('img');

      photo.classList.add('popup__photo');
      photo.src = photos[i];
      photo.alt = 'Фото ' + i;
      photo.style = 'width: 45px; height: 40px;';

      fragmentPhotos.appendChild(photo);
    }
  };

  var fragmentFeature = document.createDocumentFragment();

  var offerFeatures = function (feature) {
    for (var i = 0; i < feature.length; i++) {
      var featureElement = document.createElement('li');

      featureElement.classList.add('popup__feature', 'popup__feature--' + feature[i]);
      fragmentFeature.appendChild(featureElement);
    }

    return fragmentFeature;
  };

  var createCard = function (offer) {
    var card = templateCard.cloneNode(true);

    var photosList = card.querySelector('.popup__photos');
    window.util.removeChilds(photosList);

    getCardPhotosElement(offer.offer.photos);

    photosList.appendChild(fragmentPhotos);

    window.util.removeChilds(card.querySelector('.popup__features'));

    card.querySelector('.popup__title').textContent = offer.offer.title;
    card.querySelector('.popup__text--address').textContent = offer.offer.address;
    card.querySelector('.popup__text--price').textContent = offer.offer.price + ' ₽/ночь';
    card.querySelector('.popup__type').textContent = window.constants.LOCALIZED_OFFER_TYPE[offer.offer.type];
    card.querySelector('.popup__text--capacity').textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';
    card.querySelector('.popup__text--time').textContent = 'заезд после ' + offer.offer.checkin + ',' + ' выезд до ' + offer.offer.checkin;
    card.querySelector('.popup__features').appendChild(offerFeatures(offer.offer.features));
    card.querySelector('.popup__description').textContent = offer.offer.description;
    card.querySelector('.popup__avatar').src = offer.author.avatar;

    return card;
  };

  window.card = {
    createCard: createCard
  };
})();
