'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
  var previewAvatar = document.querySelector('.ad-form-header__preview img');
  var fileChooserHouse = document.querySelector('.ad-form__upload input[type=file]');
  var previewHouse = document.querySelector('.ad-form__photo');
  var previewAvatarSrc = previewAvatar.src;


  var PHOTO_WIDTH = 70;
  var PHOTO_HEIGHT = 70;

  var fileChooser = function () {
    var file = fileChooserAvatar.files[0];
    var fileName = file.name.toLowerCase();
    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        previewAvatar.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  fileChooserAvatar.addEventListener('change', fileChooser);

  fileChooserHouse.addEventListener('change', function () {
    if (fileChooserHouse.files) {
      var img = document.createElement('img');
      img.width = PHOTO_WIDTH;
      img.height = PHOTO_HEIGHT;
      img.classList.add('add-form__img');
      previewHouse.appendChild(img);
    }

    var file = fileChooserHouse.files[0];
    var fileName = file.name.toLowerCase();
    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        var photoHouse = previewHouse.querySelector('.add-form__img');
        photoHouse.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });

  var onRemoveFileChooser = function () {
    previewAvatar.src = previewAvatarSrc;

    var previewHouseNode = document.querySelector('.ad-form__photo img');

    previewHouse.removeChild(previewHouseNode);
  };

  window.avatar = {
    onRemoveFileChooser: onRemoveFileChooser
  };
})();


