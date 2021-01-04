"use strict";

var dataURIToBlob = function dataURIToBlob(base64) {
  var binStr = atob(base64.split(',')[1]);
  var len = binStr.length;
  var arr = new Uint8Array(len);
  var mimeString = base64.split(',')[0].split(':')[1].split(';')[0];

  for (var i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }

  return new Blob([arr], {
    type: mimeString
  });
};

var downloadFile = function downloadFile(base64, filename) {
  var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!base64 || !filename) {
    throw new Error('Missing param base64 or filename.');
  }

  if (typeof filename !== 'string') {
    throw new TypeError('Filename must be a string.');
  }

  var logger = log ? console.log : function () {
    return null;
  };
  logger('Creating blob from base64.');
  var blob = dataURIToBlob(base64);
  var url = URL.createObjectURL(blob);
  var blobAnchor = document.createElement('a');
  var dataURIAnchor = document.createElement('a');
  blobAnchor.download = filename;
  dataURIAnchor.download = filename;
  blobAnchor.href = url;
  dataURIAnchor.href = base64;
  blobAnchor.addEventListener('click', function () {
    logger('Downloading image.');
    requestAnimationFrame(function () {
      URL.revokeObjectURL(url);
    });
  });
  blobAnchor.click();
};

module.exports = downloadFile;