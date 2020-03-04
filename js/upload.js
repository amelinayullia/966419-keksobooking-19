'use strict';

(function () {
  var form = document.querySelector('.ad-form');
  var templateError = document.querySelector('#error').content.querySelector('.error');
  var templateSuccess = document.querySelector('#success').content.querySelector('.success');
  var mainPage = document.querySelector('main');

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
  };

  var onError = function (errorMessage) {
    showModal(errorMessage);
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    sending(new FormData(form), onSuccess, onError);
    window.util.disabledInput(true);
    form.classList.add('ad-form__reset');
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
