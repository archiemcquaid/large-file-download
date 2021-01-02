
# Large File Download

`large-file-download` allows you to download base64 encoded files from the client. 
Most browsers limit `<a>` tag download methods to 2mb, this package provides an alternative allowing downloads of unlimited filesize.

## Usage

### Installation

You can install using [npm](https://www.npmjs.com/package/large-file-download).

```
npm install large-file-download
```

## Download

#### CommonJS

```
const downloadFile = require('large-file-download');

downloadFile(base64String, fileName);
```

#### ES6 Modules:
 
```
import downloadFile from 'large-file-download';

downloadFile(base64String, fileName);
```

### Logging

You can enable logging by passing a truthy third argument. This is defaulted to false. E.g.

```
downloadFile(base64String, fileName, true);
```

### download(base64String, fileName, log);



Argument | Type | Required | Default | 
--- | --- | --- | --- |--- |
base64String | String | true | n/a |
fileName | String | true | n/a |  
log | Boolean | false | false |  
