const isBase64 = (str) => {
  if (str ==='' || str.trim() ===''){ return false; }
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}

const dataURIToBlob = (base64) => {
  const binStr = atob(base64.split(',')[1]);
  const len = binStr.length;
  const arr = new Uint8Array(len);
  const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];

  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }

  return new Blob([arr], {
    type: mimeString,
  });
};

const downloadFile = (base64, filename, log = false) => {
  if(!base64 || !filename) {
    throw new Error('Missing param base64 or filename.')
  }
  if(!isBase64(base64)) {
    throw new Error('File content must be a base64 string.')
  }
  if(typeof filename !== 'string') {
    throw new Error('Filename must be a string.')
  }
  const logger = log ? console.log : () => null;
  logger('Creating blob from base64.');
  const blob = dataURIToBlob(base64);
  const url = URL.createObjectURL(blob);
  const blobAnchor = document.createElement('a');
  const dataURIAnchor = document.createElement('a');
  blobAnchor.download = filename;
  dataURIAnchor.download = filename;
  blobAnchor.href = url;
  dataURIAnchor.href = base64;
  blobAnchor.addEventListener('click', () => {
    logger('Downloading image.');
    requestAnimationFrame(() => {
      URL.revokeObjectURL(url);
    });
  });
  blobAnchor.click();
};

module.exports = downloadFile;