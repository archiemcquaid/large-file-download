
# Large File Downloader

`large-file-downloader` allows you to download base64 encoded strings from the client. 
Most browsers limit `<a>` tag download methods to 2mb, this package provides an alternative allowing downloads of unlimited filesize.

## Usage

### Installation

You can install using [npm](https://www.npmjs.com/package/large-file-downloader).

```
npm install large-file-downloader
```

### Download

#### CommonJS:

```
const downloadFile = require('large-file-downloader');

downloadFile(base64String, fileName);
```

#### ES6 Modules:
 
```
import downloadFile from 'large-file-downloader';

downloadFile(base64String, fileName);
```

### Logging

You can enable logging by passing a truthy third argument. This is defaulted to false. E.g.

```
downloadFile(base64String, fileName, true);
```

### Examples

#### downloadFile

The downloadFile function returns a `Promise` and will throw if no base64 or filename parameters are provided. They must be a string.

```
downloadFile(base64String, fileName).then(() => {
    // Success
)).catch(() => {
    // Error
});
```

#### Example with html2canvas

```
const canvas = await html2canvas(document.getElementById('my-element'));
await downloadFile(canvas.toDataURL('image/png'), 'test.png');
```
