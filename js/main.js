'use strict';

var OFFERS_AMOUNT = 8;

var HOUSE_TYPES = ['palace', 'flat', 'house', 'bungalo'];

var LOCALIZED_OFFER_TYPE = {
  'flat': 'Квартира',
  'bungalo': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
};

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

var TITLES = [
  'Solaria Nishitetsu Hotel Ginza',
  'Mitsui Garden Hotel Jingugaien Tokyo Premier',
  'Hotel Sunroute Plaza Shinjuku',
  'Citadines Central Shinjuku Tokyo',
  'Citadines Shinjuku Tokyo',
  '&AND HOSTEL KURAMAE WEST ',
  'Hotel 3000 Asakusa Honten',
  'Bed & Breakfast RENGA'
];

var CHECKIN_CHECKOUT = ['12', '13', '14'];

var ADDRESS = [
  '600, 350',
  '400, 200',
  '450, 250',
  '500, 300',
  '550, 400',
  '200, 200',
  '250, 150',
  '650, 450'
];

var DESCRIPTIONS = [
  'Отель находится в 5 минутах ходьбы от храма Сэнсо-дзи и ворот Каминаримон и в 3 минутах ходьбы от концертного зала квартала Асакуса и театра Асакуса-Энгей-Холл. До парка аттракционов «Ханаясики» гости дойдут за 7 минут, а до реки Сумиды — за 10 минут. От ближайшей железнодорожной станции можно без пересадок доехать до международных аэропортов Нарита и Ханэда. Поездка от станции метро Asakusa на линии Tobu Skytree до телевизионной башни «Токио Скайтри» займет 3 минуты, а от этой же станции на линии Ginza до района Сибуя — 35 минут.',
  'Отель расположен в Токио, в районе Таито, в 500 м от гробницы Хокусай Катсушика, в 600 м от храма Чэн-дзи и в 600 м от храма Чоджу-ин. К услугам гостей этого 2-звездочного хостела номера с кондиционером, общей ванной комнатой и бесплатным Wi-Fi. Хостел находится недалеко от популярных достопримечательностей, таких как храм Эйкен-дзи, храм Курамаэ-Дзиндзя и храм Кура.',
  'Отель расположен в Токио, в 5 км от храма Ханомори Хатиман и в 6 км от концертного зала Мин-Он. Отель расположен в 6 км от храма Тономине Наито, Мемориальной галереи Мэйдзи и художественного музея Сато. Улица Джингу Гаиен Гинкго находится в 7 км, а Мейдзи Дзингу Гайен — в 7 км.',
  'Отель расположен в центральном районе Кабуки-тё, рядом с остановками общественного транспорта. Отель находится в 8 минутах ходьбы от железнодорожного вокзала Синдзюку и в 4 минутах ходьбы от станции метро Shinjuku-Sanchome. За 5 минут можно дойти до национального парка Синдзюку-Гиоэн.',
  'Отель расположен в центре района Синдзюку, всего в 4 минутах ходьбы от железнодорожного вокзала Синсен-Синдзюку и железнодорожного вокзала Синдзюку компании JR. Отель находится примерно в 15 минутах ходьбы от парков Синдзюку-Гёэн и Ёёги, квартала Кабуки-тё и знаменитого универмага Isetan.',
  'Отель удобно расположен в 1 минуте ходьбы от выхода 10 станции метро Akasaka Mitsuke и в 7 минутах ходьбы от района Акасака Сакас. Отель находится в 10 минутах ходьбы от храма Хиэ и в 5 минутах езды на автомобиле от здания парламента Японии. За 15 минут по линии метро Marunouchi можно добраться до железнодорожного вокзала Станция Токио, за 30 минут на поезде — до Императорского дворца, а за 50 минут — до ближайшего аэропорта Ханэда.',
  'Отель расположен в Токио, в 400 метрах от музея Sony Music Roppongi и в 500 метрах от храма Асахи. На всей территории работает бесплатный Wi-Fi. Художественный музей Мори и храм Джубан-Инари находятся в 1,1 км, а бывшая резиденция Наоя Сига — в 1,3 км. Стойка регистрации открыта круглосуточно, работает камера хранения багажа и пункт обмена валют. Неподалеку расположены такие популярные достопримечательности, как музей Сэн-оку-Хакукокан, храм Идзумо-Токио-Бунши и архитектурный комплекс Холмы Роппонги. Расстояние от отеля Mitsui Garden Roppongi Tokyo до международного аэропорта Токио-Ханэда составляет 22 км.',
  'Отель расположен в районе Синагава в Токио, в 2,2 км от сада Эбису и в 3,9 км от холмов Роппонги. Музей Нэдзу находится в 4,2 км от отеля, а статуя Хатико — в 4,4 км от отеля. Международный аэропорт Токио-Ханеда расположен в 9 км от отеля Mitsui Garden Hotel Gotanda.'
];

var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

var COMPLIANCE_OPTIONS = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

var HOUSETYPES_PRICE = {
  BUNGALO: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000
};

var button = document.querySelector('.map__pin--main');
var inputs = document.querySelectorAll('.map__features, .map__filter, .ad-form__element, .ad-form-header');
var pinsContainer = document.querySelector('.map__pins');
var formAddress = document.querySelector('#address');
var formTimeIn = document.querySelector('#timein');
var formTimeOut = document.querySelector('#timeout');
var rooms = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');
var map = document.querySelector('.map');
var templateCard = document.querySelector('#card').content.querySelector('.popup');
var templatePins = document.querySelector('#pin').content.querySelector('.map__pin');
var housePrice = document.querySelector('#price');
var houseType = document.querySelector('#type');


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

var generateOffer = function () {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomValue(1, OFFERS_AMOUNT) + '.png'
    },
    offer: {
      title: getRandomItemFrom(TITLES),
      address: getRandomItemFrom(ADDRESS),
      price: getRandomValue(2000, 8000),
      type: getRandomItemFrom(HOUSE_TYPES),
      rooms: getRandomValue(1, 5),
      guests: getRandomValue(2, 10),
      checkin: getRandomItemFrom(CHECKIN_CHECKOUT),
      checkout: getRandomItemFrom(CHECKIN_CHECKOUT),
      features: getArrayOfRandomItemFrom(FEATURES, getRandomValue(1, 5)),
      description: getRandomItemFrom(DESCRIPTIONS),
      photos: getArrayOfRandomItemFrom(PHOTOS, getRandomValue(1, 5))
    },
    location: {
      x: getRandomValue(50, 1000),
      y: getRandomValue(130, 630)
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


var closePopUp = function () {
  var popup = document.querySelector('.popup');

  if (popup) {
    popup.remove();
  }
};

// Добавляет метки (pins) на карте
var createPin = function (offer) {
  var pin = templatePins.cloneNode(true);

  pin.style =
    'left:' + offer.location.x + 'px; top:' + offer.location.y + 'px;';
  pin.querySelector('img').src = offer.author.avatar;
  pin.querySelector('img').alt = offer.offer.title;

  var renderBidPicture = function () {
    closePopUp();

    map.appendChild(createCard(offer));

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

var renderPins = function (array) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(createPin(array[i]));
  }

  return fragment;
};

// Создает массив из 8 сгенерированных JS объектов
var offers = generateOffers(OFFERS_AMOUNT);

// Добавляет на карте popup
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
  removeChilds(photosList);

  getCardPhotosElement(offer.offer.photos);

  photosList.appendChild(fragmentPhotos);

  removeChilds(card.querySelector('.popup__features'));

  card.querySelector('.popup__title').textContent = offer.offer.title;
  card.querySelector('.popup__text--address').textContent = offer.offer.address;
  card.querySelector('.popup__text--price').textContent = offer.offer.price + ' ₽/ночь';
  card.querySelector('.popup__type').textContent = LOCALIZED_OFFER_TYPE[offer.offer.type];
  card.querySelector('.popup__text--capacity').textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';
  card.querySelector('.popup__text--time').textContent = 'заезд после ' + offer.offer.checkin + ',' + ' выезд до ' + offer.offer.checkin;
  card.querySelector('.popup__features').appendChild(offerFeatures(offer.offer.features));
  card.querySelector('.popup__description').textContent = offer.offer.description;
  card.querySelector('.popup__avatar').src = offer.author.avatar;

  return card;
};

// Делает страницу при открытии неактивной, а принажатии на пин активной
var disabledInput = function (state) {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = state;
  }
};

disabledInput(true);

var activatePage = function () {
  map.classList.remove('map--faded');
  disabledInput(false);
  // Добавляет метки (pins) на карте
  pinsContainer.appendChild(renderPins(offers));
};

button.addEventListener('mousedown', activatePage);

button.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    activatePage();
  }
});

var formRoomsGuest = function (evt) {
  var value = evt.target.value;
  var options = capacity.options;
  var optionsLength = options.length;
  var availableOptions = COMPLIANCE_OPTIONS[value];

  for (var i = 0; i < optionsLength; i++) {
    if (availableOptions.indexOf(options[i].value) !== -1) {
      options[i].disabled = false;
      if (options[i].value === value || availableOptions.length === 1) {
        options[i].selected = true;
      }
    } else {
      options[i].disabled = true;
    }
  }
};

rooms.addEventListener('change', formRoomsGuest);

var formAddressValue = function () {
  var currentY = button.offsetTop;
  var currentX = button.offsetLeft;

  formAddress.value = (currentX + ', ' + currentY);
};

formAddressValue();

formTimeIn.addEventListener('change', function (evt) {
  formTimeOut.value = evt.target.value;
});

var houseTypePrice = function () {
  housePrice.min = HOUSETYPES_PRICE[houseType.value.toUpperCase()];
  housePrice.placeholder = HOUSETYPES_PRICE[houseType.value.toUpperCase()];
};

houseType.addEventListener('change', houseTypePrice);
