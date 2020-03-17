'use strict';

(function () {
  var request = function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', window.constants.URL_LOAD);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        window.form.onSuccess(xhr.response);
      } else {
        window.form.onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      window.form.onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      window.form.onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = window.constants.TIMEOUT_IN_MS;

    xhr.open('GET', window.constants.URL_LOAD);
    xhr.send();
  };

  window.load = {
    request: request
  };
})();
