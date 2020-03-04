'use strict';

(function () {
  var OFFERS_AMOUNT = 8;

  var URL_LOAD = 'https://js.dump.academy/keksobooking/data';
  var URL_UPLOAD = 'https://js.dump.academy/keksobooking';
  var TIMEOUT_IN_MS = 10000;

  var MIN_MAIN_PIN_Y = 130;
  var MAX_MAIN_PIN_Y = 630;
  var MAIN_PIN_WIDTH = 65;
  var MAIN_PIN_HEIGHT = 87;

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

  window.constants = {
    OFFERS_AMOUNT: OFFERS_AMOUNT,
    HOUSE_TYPES: HOUSE_TYPES,
    LOCALIZED_OFFER_TYPE: LOCALIZED_OFFER_TYPE,
    FEATURES: FEATURES,
    TITLES: TITLES,
    CHECKIN_CHECKOUT: CHECKIN_CHECKOUT,
    ADDRESS: ADDRESS,
    DESCRIPTIONS: DESCRIPTIONS,
    PHOTOS: PHOTOS,
    COMPLIANCE_OPTIONS: COMPLIANCE_OPTIONS,
    HOUSETYPES_PRICE: HOUSETYPES_PRICE,
    MIN_MAIN_PIN_Y: MIN_MAIN_PIN_Y,
    MAX_MAIN_PIN_Y: MAX_MAIN_PIN_Y,
    MAIN_PIN_WIDTH: MAIN_PIN_WIDTH,
    MAIN_PIN_HEIGHT: MAIN_PIN_HEIGHT,
    URL_LOAD: URL_LOAD,
    TIMEOUT_IN_MS: TIMEOUT_IN_MS,
    URL_UPLOAD: URL_UPLOAD
  };
})();
