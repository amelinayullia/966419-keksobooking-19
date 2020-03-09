'use strict';

(function () {
  var form = document.querySelector('.ad-form');
  var templateError = document.querySelector('#error').content.querySelector('.error');
  var templateSuccess = document.querySelector('#success').content.querySelector('.success');
  var mainPage = document.querySelector('main');
  var map = document.querySelector('.map');
  var pinsContainer = document.querySelector('.map__pins');

  var errorDisplay = templateError.cloneNode(true);
  var successDisplay = templateSuccess.cloneNode(true);

  var sending = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', window.constants.URL_UPLOAD);
    xhr.send(data);
  };

  var onSuccess = function () {
    showModal();

    form.reset();
    map.classList.add('map--faded');
    form.classList.add('ad-form--disabled');
    window.util.disabledInput(true);

    var pins = document.querySelectorAll('.map__pin');
    for (var i = 1; i < pins.length; i++) {
      pinsContainer.removeChild(pins[i]);
    }
  };

  var onError = function (errorMessage) {
    showModal(errorMessage);
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    sending(new FormData(form), function (response) {
      return response;
    });

    onSuccess();
    onError();
  });

  var closeModal = function () {
    var modalSuccess = mainPage.querySelector('.success');
    var modalError = mainPage.querySelector('.success');
    modalSuccess.remove();
    modalError.remove();
    document.removeEventListener('keydown', onEscPress);
    document.removeEventListener('mousedown', onModalClick);
  };

  var onEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };

  var onModalClick = function () {
    closeModal();
  };

  var showModal = function (errorMessage) {
    if (errorMessage) {
      errorDisplay.querySelector('p').textContent = errorMessage;
      mainPage.appendChild(errorDisplay);
    } else {
      mainPage.appendChild(successDisplay);
    }

    document.addEventListener('keydown', onEscPress);
    document.addEventListener('mousedown', onModalClick);
  };
})();
