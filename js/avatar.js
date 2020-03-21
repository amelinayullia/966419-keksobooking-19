'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
  var previewAvatar = document.querySelector('.ad-form-header__preview img');
  var fileChooserHouse = document.querySelector('.ad-form__upload input[type=file]');
  var previewHouse = document.querySelector('.ad-form__photo');
  var previewAvatarSrc = previewAvatar.src;

  var onFileChooser = function () {
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

  fileChooserAvatar.addEventListener('change', onFileChooser);

  fileChooserHouse.addEventListener('change', function () {
    window.util.removeChilds(previewHouse);

    if (fileChooserHouse.files) {
      var img = document.createElement('img');
      img.width = window.constants.PHOTO_WIDTH;
      img.height = window.constants.PHOTO_HEIGHT;
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
    window.util.removeChilds(previewHouse);

    previewAvatar.src = previewAvatarSrc;
  };

  window.avatar = {
    onRemoveFileChooser: onRemoveFileChooser
  };
})();


